package stepdefenitions;

import org.json.JSONArray;
import org.json.JSONObject;
import org.testng.Assert;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.RestAssured;

import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;


class Data_Sementaras {
    private  String  Titik_akhir_Api;
    private  Integer  ID_produk;
    private Response ResponseData;
    
    public void setTitik_api(String Titik_akhir_Api){
        this.Titik_akhir_Api = Titik_akhir_Api;
    }
    public String getTitik_api(){
        return this.Titik_akhir_Api;
    }
    public void setIDproduk(Integer ID_produk){
        this.ID_produk = ID_produk;
    }
    public Integer getIDproduk(){
        return this.ID_produk;
    }
    public void setResponse(Response ResponseData){
            this.ResponseData = ResponseData;
    }
    public Response getResponse(){
        return this.ResponseData;
    }

}

public class StepDefenitions {
    RequestSpecification requestSpecification;
    String idObject;
    public String stringJSON;
    Data_Sementaras api = new Data_Sementaras();
    Data_Sementaras ID_priduk = new Data_Sementaras();
    Data_Sementaras ResponseData = new Data_Sementaras();

    @Before
    public void setUp() {
        String baseUri = api.getTitik_api() != null 
                         ? "https://dummyjson.com" + api.getTitik_api()
                         : "https://dummyjson.com/";
        RestAssured.baseURI = baseUri;
        requestSpecification = RestAssured.given();
        System.out.println("Base URI: " + baseUri);
    }
    @After
    public void After_setUp(){
        api.setTitik_api(null);
        ResponseData.setResponse(null);
    }
    @Given("Dengan titik akhir API {string}")
    public void dengan_titik_akhir_API(String string) {
        api.setTitik_api(string);
        setUp();
        Response response = requestSpecification
                .get();
        ResponseData.setResponse(response) ;   
    }

    @When("Saat saya mengirim permintaan GET ke titik akhir")
    public void saat_saya_mengirim_permintaan_GET_ke_titik_akhir() {
    }
    @Then("Maka kode status respons harus {int}")
    public void maka_kode_status_respons_harus(int int1) {  
        int  statusCode = ResponseData.getResponse().getStatusCode();
        // System.out.println(statusCode+int1);
        Assert.assertEquals(statusCode,int1);
    }
    @Then("Dan badan respons harus berisi daftar sumber daya")
    public void dan_badan_respons_harus_berisi_daftar_sumber_daya() {
        Assert.assertNotNull(ResponseData.getResponse().asPrettyString());
        System.out.println("Response: " + ResponseData.getResponse().asPrettyString());
    }

    @Given("diberikan endpoint {string} dan ID = {int}")
    public void diberikan_endpoint_dan_ID(String string, Integer int1) {
        api.setTitik_api(string+int1);
        setUp();
        Response response = requestSpecification
                .get();
        ResponseData.setResponse(response) ;   
        System.out.println("endpoin pint  "+string+int1);
    }

    @Then("Dan detail produk dengan ID = {int} harus ditampilkan")
    public void dan_detail_produk_dengan_ID_harus_ditampilkan(Integer int1) {
        JSONObject jsonResponse = new JSONObject(ResponseData.getResponse().asString());
        Assert.assertNotNull(jsonResponse.getInt("id"));
        System.out.println("Response: " + ResponseData.getResponse().asPrettyString());
    }

    @When("Saat pengguna mengirim permintaan POST ke {string} dengan payload berikut:")
    public void saat_pengguna_mengirim_permintaan_POST_ke_dengan_payload_berikut(String string, String docString) {
        api.setTitik_api(string);
        setUp();
        Response response = requestSpecification
                            .body(docString)
                            .contentType("application/json").log().all()
                            .post(); 
        ResponseData.setResponse(response) ;                    
        JSONObject jsonResponse = new JSONObject(ResponseData.getResponse().asString());
        Assert.assertNotNull(jsonResponse.getInt("id"));
    }

    @Then("Maka status respons harus {int}")
    public void maka_status_respons_harus(Integer int1) {
        Response data_response= ResponseData.getResponse() ;
        Integer statusCode = data_response.getStatusCode();
        Assert.assertEquals(statusCode,int1);
        
    }

    @Then("Dan isi respons harus berisi title {string}")
    public void dan_isi_respons_harus_berisi(String string) {
        Response data_response= ResponseData.getResponse() ;
        JSONObject jsonResponse = new JSONObject(data_response.asPrettyString());
        // System.out.println("data response "+jsonResponse.getString("title")+" dan "+ string);
        System.out.println("Response: " + ResponseData.getResponse().asPrettyString());
        Assert.assertEquals(jsonResponse.getString("title"), string);
    }

    @Then("Dan ID produk telah tersimpan di sistem")
    public void dan_ID_produk_telah_tersimpan_di_sistem() {
        Response data_response= ResponseData.getResponse() ;
        JSONObject jsonResponse = new JSONObject(data_response.asString());
        System.out.println("data id "+jsonResponse.getInt("id"));
        ID_priduk.setIDproduk(jsonResponse.getInt("id"));
    }

    @When("Saat pengguna mengirim permintaan put ke {string} dengan payload berikut:")
    public void saat_pengguna_mengirim_permintaan_put_ke_dengan_payload_berikut(String string, String docString) {
        api.setTitik_api(string);
            setUp();
            Response response = requestSpecification
                                .body(docString)
                                .contentType("application/json")
                                .log().all()
                                .put(); 
            ResponseData.setResponse(response) ;
    }
    @When("Saat pengguna mengirim permintaan delete ke {string}")
    public void saat_pengguna_mengirim_permintaan_delete_ke(String string) {
        api.setTitik_api(string);
        setUp();
        Response response = requestSpecification
                        .log().all()
                        .delete();
        ResponseData.setResponse(response) ;
    }

    @Then("Dan isi respons harus berisi isDeleted {string}")
    public void dan_isi_respons_harus_berisi_isDeleted(String string) {
        Response data_response= ResponseData.getResponse() ;
        JSONObject jsonResponse = new JSONObject(data_response.asPrettyString());
        Assert.assertEquals(jsonResponse.getBoolean("isDeleted"), Boolean.parseBoolean(string));
    }
}
