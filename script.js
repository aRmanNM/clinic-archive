// global variables
var canvas;

function searchPatient() {
  let input = document.getElementById("search-input");
  let resultList = document.getElementById("search-result");
  let searchTable = document.getElementById("search-table");
  let searchMessage = document.getElementById("search-message");

  let result;
  if (input.value) {
    result = window.sqlite.dbrepo?.searchPatient(input.value);
  }

  if (!input.value || result.length === 0) {
    searchTable.hidden = true;
    searchMessage.hidden = false;
    searchMessage.innerText = "هیچی پیدا نشد";
    return;
  }

  searchTable.hidden = false;
  searchMessage.hidden = true;
  resultList.replaceChildren();

  result.forEach((element) => {
    let row = document.createElement("tr");
    let show = document.createElement("button");
    let edit = document.createElement("button");
    let name = document.createElement("td");
    let nationalCode = document.createElement("td");
    let phoneNumber = document.createElement("td");
    let insurance = document.createElement("td");
    let createdAt = document.createElement("td");
    let lastVisitedAt = document.createElement("td");
    let actions = document.createElement("td");

    show.textContent = "مشاهده صفحه بیمار";
    show.onclick = () => showPatient(element.id);
    show.classList.add("btn");
    show.classList.add("btn-info");
    show.classList.add("btn-sm");
    show.classList.add("ms-1");

    edit.textContent = "ویرایش بیمار";
    edit.onclick = () => showForm(element.id);
    edit.classList.add("btn");
    edit.classList.add("btn-secondary");
    edit.classList.add("btn-sm");
    edit.classList.add("ms-1");

    name.textContent = element.name;
    nationalCode.textContent = element.nationalCode;
    phoneNumber.textContent = element.phoneNumber;
    insurance.textContent = mapInsuranceIdToInsuranceName(element.insuranceId);
    createdAt.textContent = timestampToPersianDateTime(element.createdAt);
    lastVisitedAt.textContent = timestampToPersianDateTime(element.lastVisitedAt);

    actions.appendChild(show);
    actions.appendChild(edit);

    row.appendChild(name);
    row.appendChild(nationalCode);
    row.appendChild(phoneNumber);
    row.appendChild(insurance);
    row.appendChild(createdAt);
    row.appendChild(lastVisitedAt);
    row.appendChild(actions);

    resultList.appendChild(row);
  });
}

function mapInsuranceIdToInsuranceName(insuranceId) {
  switch (insuranceId) {
    case 0:
      return 'بدون بیمه';
    case 1:
      return 'تامین اجتماعی';
    case 2:
      return 'خدمات درمانی';
    case 3:
      return 'نیروهای مسلح';
    default:
      break;
  }
}

function showPatient(id) {
  toggleSection("patient");

  let patientId = document.getElementById("patient-id");
  let patientNationalCode = document.getElementById("patient-nationalCode");
  let patientName = document.getElementById("patient-name");
  let patientPhoneNumber = document.getElementById("patient-phoneNumber");
  let patientInsurance = document.getElementById("patient-insurance");
  let patientCreatedAt = document.getElementById("patient-createdAt");
  let patientLastCaseCreatedAt = document.getElementById("patient-lastCaseCreatedAt");
  let patientTotalCase = document.getElementById("patient-totalCase");

  let patientGallery = document.getElementById("patient-gallery");

  patientGallery.replaceChildren();

  const patient = window.sqlite.dbrepo?.getPatientWithImages(id);
  // console.log(patient);

  let counter = 0;
  patient.forEach((element) => {
    if (element.image) {
      counter += 1;
      let imageElement = document.createElement("img");
      let figure = document.createElement('figure');
      let figureCaption = document.createElement('figcaption');
      imageElement.width = 200;
      imageElement.height = 200;
      // const blob = new Blob([element.image], { type: "image/png" });
      const blob = new Blob([element.image], { type: "image/svg+xml" });
      // console.log(blob);
      const blobUrl = URL.createObjectURL(blob);
      imageElement.src = blobUrl;

      imageElement.onclick = () => {
        window.location = `canvas.html?patientId=${id}&caseId=${element.caseId}`;
      };

      figureCaption.innerText = `${timestampToPersianDateTime(element.caseCreatedAt)}`;

      if (counter == 1 && patient.length > 1) {
        figureCaption.innerText += ' (آخرین)';
      }

      figure.appendChild(imageElement);
      figure.appendChild(figureCaption);
      patientGallery.appendChild(figure);
    }
  });

  patientId.textContent = patient[0].id;
  patientNationalCode.textContent = patient[0].nationalCode;
  patientName.textContent = patient[0].name;
  patientPhoneNumber.textContent = patient[0].phoneNumber;
  patientInsurance.textContent = mapInsuranceIdToInsuranceName(patient[0].insuranceId);
  patientCreatedAt.textContent = timestampToPersianDateTime(patient[0].createdAt);
  patientLastCaseCreatedAt.textContent = timestampToPersianDateTime(patient[0].lastVisitedAt);
  patientTotalCase.textContent = counter;
}

function showForm(id) {
  toggleSection("form");

  let button = document.getElementById("form-button");
  let idInput = document.getElementById("form-id");
  let nameInput = document.getElementById("form-name");
  let nationalCodeInput = document.getElementById("form-nationalcode");
  let phoneNumberInput = document.getElementById("form-phoneNumber");
  let insuranceInput = document.getElementById("form-insurance");

  // clear input state
  idInput.value = "";
  nationalCodeInput.value = "";
  nameInput.value = "";
  phoneNumberInput.value = "";
  insuranceInput.value = 0;

  if (id) {
    const patient = window.sqlite.dbrepo?.getPatient(id);
    button.value = "ویرایش";
    idInput.value = patient.id;
    nationalCodeInput.value = patient.nationalCode;
    nameInput.value = patient.name;
    phoneNumberInput.value = patient.phoneNumber;
    insuranceInput.value = patient.insuranceId;
  } else {
    button.value = "ساخت";
  }
}

function uploadImage() {
  const imageUpload = document.getElementById("patient-upload");
  const patientid = document.getElementById("patient-id").innerText;

  const reader = new FileReader();
  reader.onload = () => {
    const array = new Uint8Array(reader.result);
    window.sqlite.dbrepo?.createCase(patientid, array, Date.now());

    showPatient(patientid);
  };
  reader.readAsArrayBuffer(imageUpload.files[0]);
}

function createOrUpdatePatient() {
  let id = document.getElementById("form-id").value;
  let nationalCode = document.getElementById("form-nationalcode").value;
  let name = document.getElementById("form-name").value;
  let phoneNumber = document.getElementById("form-phoneNumber").value;
  let insuranceId = document.getElementById("form-insurance").value;

  if (id) {
    window.sqlite.dbrepo?.updatePatient(id, name, nationalCode, phoneNumber, Date.now(), insuranceId);
  } else {
    const total = window.sqlite.dbrepo?.countPatients();
    if (total > 10) {
      window.dialog.showDialogMessage("امکان تعریف مراجع جدید در نسخه دمو وجود ندارد", "");
    }
    else {
      window.sqlite.dbrepo?.createPatient(name, nationalCode, phoneNumber, Date.now(), insuranceId);
    }
  }

  toggleSection("search");
  searchPatient();
}

// async function saveCanvas() {
//   const patientid = document.getElementById("patient-id").innerText;
//   const dataUrl = canvas.toDataURL();
//   const res = await fetch(dataUrl);
//   const blob = await res.blob();

//   const reader = new FileReader();
//   reader.onload = () => {
//     const array = new Uint8Array(reader.result);
//     window.sqlite.dbrepo?.createCase(patientid, array, Date.now());

//     canvas.dispose();
//     showPatient(patientid);
//   };
//   reader.readAsArrayBuffer(blob);
// }

function showCanvasNext() {
  let patientId = document.getElementById("patient-id").textContent;
  window.location = `canvas.html?patientId=${patientId}`;
}

// function showCanvas(id) {
//   toggleSection("canvas");
//   var patientid = document.getElementById("patient-id").innerText;
//   document.getElementById("canvas-patientid").innerText = patientid;

//   if (canvas === null || canvas === undefined) {
//     canvas = new fabric.Canvas("canvas-case", {
//       isDrawingMode: true,
//       imageSmoothingEnabled: false,
//       allowTouchScrolling: false,
//       enablePointerEvents: true
//     });

//     canvas.freeDrawingBrush.width = 1 * 3;
//   }

//   function resizeCanvas() {
//     const body = document.getElementById('body');
//     const canvasTop = document.getElementById('canvas-top');
//     canvas.setHeight(body.offsetHeight - canvasTop.clientHeight);
//     canvas.setWidth(body.offsetWidth);
//     canvas.renderAll();
//   }

//   // resize on init
//   resizeCanvas();
// }

// function changeBrushSize() {
//   var brushSize = document.getElementById('canvas-brush-size').value;
//   canvas.freeDrawingBrush.width = 1 * brushSize;
// }

// function clearCanvas() {
//   canvas.clear();
// }

function returnFromCanvas() {
  canvas.dispose();
  toggleSection("patient");
}

function returnToBase() {
  toggleSection("search");
}

function initSection(name) {
  if (name == 'search') {
    // let footer = document.getElementById('search-footer');

    // var start = new Date();
    // start.setUTCHours(0, 0, 0, 0);

    // const res = window.sqlite.dbrepo?.getStats(start.getTime());
    // footer.innerText = `تعداد کل مراجعین: ${res.total} - تعداد مراجعین امروز: ${res.todayTotal}`;
  }
}

function timestampToPersianDateTime(timestamp) {
  if (!timestamp) return;
  const date = new Date(+timestamp).toLocaleDateString("fa-IR");
  const time = new Date(+timestamp).toLocaleTimeString("fa-IR", { hour: '2-digit', minute: '2-digit' });

  return `${date}-${time}`;
}

async function toggleSection(name) {
  let sections = document.getElementsByTagName("section");
  for (var i = 0; i < sections.length; i++) {
    sections[i].hidden = true;
  }

  var section = document.getElementById(name);
  section.hidden = false;
  await initSection(name)
}

document.addEventListener(
  "DOMContentLoaded",
  async function () {

    const searchParams = new URLSearchParams(window.location.search);
    const patientId = searchParams.get('patientId');

    if (patientId) {
      showPatient(patientId);
    } else {
      await toggleSection("search");
    }
  },
  false
);