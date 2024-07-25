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
    let actions = document.createElement("td");

    show.textContent = "مشاهده صفحه بیمار";
    show.onclick = () => showPatient(element.id);
    show.classList.add("btn");
    show.classList.add("btn-info");

    edit.textContent = "ویرایش بیمار";
    edit.onclick = () => showForm(element.id);
    edit.classList.add("btn");
    edit.classList.add("btn-secondary");

    name.textContent = element.name;
    nationalCode.textContent = element.nationalCode;

    actions.appendChild(show);
    actions.appendChild(edit);

    row.appendChild(name);
    row.appendChild(nationalCode);
    row.appendChild(actions);

    resultList.appendChild(row);
  });
}

function showPatient(id) {
  toggleSection("patient");

  let patientId = document.getElementById("patient-id");
  let patientNationalCode = document.getElementById("patient-nationalCode");
  let patientName = document.getElementById("patient-name");
  let patientGallery = document.getElementById("patient-gallery");
  patientGallery.replaceChildren();

  const patient = window.sqlite.dbrepo?.getPatientWithImages(id);
  // console.log(patient);

  patient.forEach((element) => {
    if (element.image) {
      let imageElement = document.createElement("img");
      imageElement.width = 200;
      imageElement.height = 200;
      const blob = new Blob([element.image], { type: "image/png" });
      const blobUrl = URL.createObjectURL(blob);
      imageElement.src = blobUrl;

      patientGallery.appendChild(imageElement);
    }
  });

  patientId.innerText = patient[0].id;
  patientNationalCode.innerText = patient[0].nationalCode;
  patientName.innerText = patient[0].name;
}

function showForm(id) {
  toggleSection("form");

  let button = document.getElementById("form-button");
  let idInput = document.getElementById("form-id");
  let nationalCodeInput = document.getElementById("form-nationalcode");
  let nameInput = document.getElementById("form-name");

  // clear input state
  idInput.value = "";
  nationalCodeInput.value = "";
  nameInput.value = "";

  if (id) {
    const patient = window.sqlite.dbrepo?.getPatient(id);
    button.value = "ویرایش";
    idInput.value = patient.id;
    nationalCodeInput.value = patient.nationalCode;
    nameInput.value = patient.name;
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
    window.sqlite.dbrepo?.createCase(patientid, array);

    showPatient(patientid);
  };
  reader.readAsArrayBuffer(imageUpload.files[0]);
}

function createOrUpdatePatient() {
  let id = document.getElementById("form-id").value;
  let nationalCode = document.getElementById("form-nationalcode").value;
  let name = document.getElementById("form-name").value;

  if (id) {
    window.sqlite.dbrepo?.updatePatient(id, name, nationalCode);
  } else {
    window.sqlite.dbrepo?.createPatient(name, nationalCode);
  }

  toggleSection("search");
  searchPatient();
}

async function saveCanvas() {
  const patientid = document.getElementById("patient-id").innerText;
  const dataUrl = canvas.toDataURL();
  const res = await fetch(dataUrl);
  const blob = await res.blob();

  const reader = new FileReader();
  reader.onload = () => {
    const array = new Uint8Array(reader.result);
    window.sqlite.dbrepo?.createCase(patientid, array);

    canvas.dispose();
    showPatient(patientid);
  };
  reader.readAsArrayBuffer(blob);
}

function showCanvas(id) {
  toggleSection("canvas");
  var patientid = document.getElementById("patient-id").innerText;
  document.getElementById("canvas-patientid").innerText = patientid;

  var canvasLog = document.getElementById('canvas-log');

  canvas = new fabric.Canvas("canvas-case", {
    isDrawingMode: true,
    imageSmoothingEnabled: false,
    allowTouchScrolling: false,
    enablePointerEvents: true
  });

  var originalFire = canvas.fire;
  canvas.fire = function (eventName, options) {
    // console.log('Event:', eventName, options);
    canvasLog.textContent = `${eventName} ` + canvasLog.textContent;
    originalFire.call(this, eventName, options);
  };

  window.addEventListener('resize', resizeCanvas, false);

  function resizeCanvas() {
    const body = document.getElementById('body');
    const canvasTop = document.getElementById('canvas-top');
    canvas.setHeight(body.offsetHeight - canvasTop.clientHeight);
    canvas.setWidth(body.offsetWidth);
    canvas.renderAll();
  }

  // resize on init
  resizeCanvas();

  // document.getElementById('canvas-brush-size').value = 3;
  canvas.freeDrawingBrush.width = 1 * 3;
}

function changeBrushSize() {
  var brushSize = document.getElementById('canvas-brush-size').value;
  canvas.freeDrawingBrush.width = 1 * brushSize;
}

function clearCanvas() {
  canvas.clear();
}

function returnFromCanvas() {
  canvas.dispose();
  toggleSection("patient");
}

function returnToBase() {
  toggleSection("search");
}

function toggleSection(name) {
  let sections = document.getElementsByTagName("section");
  for (var i = 0; i < sections.length; i++) {
    sections[i].hidden = true;
  }

  var section = document.getElementById(name);
  section.hidden = false;
}

document.addEventListener(
  "DOMContentLoaded",
  function () {
    toggleSection("search");
  },
  false
);