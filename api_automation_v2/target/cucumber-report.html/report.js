$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/End2End_Test.feature");
formatter.feature({
  "name": "End to End simulation Test _AAA",
  "description": "Description: Kami akan menguji beberapa skenario menerapkan Tes E2E pada dummy json pada web site https://dummyjson.com/docs/products#products-all mengunakan cucumber, testng, dan RestAssured ",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Sebagai pengguna saya dapat melihat semua data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@LihatSemuaData"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Dengan titik akhir API \"/products\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefenitions.StepDefenitions.dengan_titik_akhir_API(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Saat saya mengirim permintaan GET ke titik akhir",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefenitions.StepDefenitions.saat_saya_mengirim_permintaan_GET_ke_titik_akhir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Maka kode status respons harus 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefenitions.StepDefenitions.maka_kode_status_respons_harus(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Dan badan respons harus berisi daftar sumber daya",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefenitions.StepDefenitions.dan_badan_respons_harus_berisi_daftar_sumber_daya()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "melihat data id tertentu",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@LihatSalahSatuData"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "diberikan endpoint \"/products/\" dan ID \u003d 1",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefenitions.StepDefenitions.diberikan_endpoint_dan_ID(java.lang.String,java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Saat saya mengirim permintaan GET ke titik akhir",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefenitions.StepDefenitions.saat_saya_mengirim_permintaan_GET_ke_titik_akhir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Maka kode status respons harus 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefenitions.StepDefenitions.maka_kode_status_respons_harus(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Dan detail produk dengan ID \u003d 1 harus ditampilkan",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefenitions.StepDefenitions.dan_detail_produk_dengan_ID_harus_ditampilkan(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Pengguna menambahkan produk baru",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AddData"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Saat pengguna mengirim permintaan POST ke \"/products/add\" dengan payload berikut:",
  "keyword": "When ",
  "doc_string": {
    "value": "{\n  \"title\": \"Produk Baru\"\n}"
  }
});
formatter.match({
  "location": "stepdefenitions.StepDefenitions.saat_pengguna_mengirim_permintaan_POST_ke_dengan_payload_berikut(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Maka status respons harus 201",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefenitions.StepDefenitions.maka_status_respons_harus(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Dan isi respons harus berisi title \"Produk Baru\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefenitions.StepDefenitions.dan_isi_respons_harus_berisi(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Dan ID produk telah tersimpan di sistem",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefenitions.StepDefenitions.dan_ID_produk_telah_tersimpan_di_sistem()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User update data dengan id yang telah di sampan sebelumnya",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@UpadteData"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Saat pengguna mengirim permintaan put ke \"/products/1\" dengan payload berikut:",
  "keyword": "When ",
  "doc_string": {
    "value": "{\n  \"title\": \"Produk Baru v2\"\n}"
  }
});
formatter.match({
  "location": "stepdefenitions.StepDefenitions.saat_pengguna_mengirim_permintaan_put_ke_dengan_payload_berikut(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Maka kode status respons harus 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefenitions.StepDefenitions.maka_kode_status_respons_harus(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Dan isi respons harus berisi title \"Produk Baru v2\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefenitions.StepDefenitions.dan_isi_respons_harus_berisi(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User hapus data dengan id yang dutentukan",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DeleteData"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Saat pengguna mengirim permintaan delete ke \"/products/1\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefenitions.StepDefenitions.saat_pengguna_mengirim_permintaan_delete_ke(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Maka kode status respons harus 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefenitions.StepDefenitions.maka_kode_status_respons_harus(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Dan isi respons harus berisi isDeleted \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefenitions.StepDefenitions.dan_isi_respons_harus_berisi_isDeleted(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});