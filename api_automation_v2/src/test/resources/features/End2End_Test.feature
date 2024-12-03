Feature: End to End simulation Test
Description: Kami akan menguji beberapa skenario menerapkan Tes E2E pada dummy json pada web site https://dummyjson.com/docs/products#products-all mengunakan cucumber, testng, dan RestAssured 

  @LihatSemuaData
  Scenario: Sebagai pengguna saya dapat melihat semua data
    Given Dengan titik akhir API "/products"
    When Saat saya mengirim permintaan GET ke titik akhir
    Then Maka kode status respons harus 200
    And Dan badan respons harus berisi daftar sumber daya

  @LihatSalahSatuData
  Scenario: melihat data id tertentu
    Given diberikan endpoint "/products/" dan ID = 1
    When Saat saya mengirim permintaan GET ke titik akhir
    Then Maka kode status respons harus 200
    And Dan detail produk dengan ID = 1 harus ditampilkan

  @AddData
  Scenario: Pengguna menambahkan produk baru
    When Saat pengguna mengirim permintaan POST ke "/products/add" dengan payload berikut:
      """
      {
        "title": "Produk Baru"
      }
      """
    Then Maka status respons harus 201
    And Dan isi respons harus berisi title "Produk Baru"
    And Dan ID produk telah tersimpan di sistem

  @UpadteData
  Scenario: User update data dengan id yang telah di sampan sebelumnya
    When Saat pengguna mengirim permintaan put ke "/products/1" dengan payload berikut:
      """
      {
        "title": "Produk Baru v2"
      }
      """
    Then Maka kode status respons harus 200
    And Dan isi respons harus berisi title "Produk Baru v2"

  @DeleteData
  Scenario: User hapus data dengan id yang dutentukan
    When Saat pengguna mengirim permintaan delete ke "/products/1"
    Then Maka kode status respons harus 200
    And Dan isi respons harus berisi isDeleted "true"
