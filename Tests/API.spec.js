import { chromium, test, Page, BrowserContext, expect} from "@playwright/test"


test("GET: LIST USERS", async ({request})=>{
    let result = await request.get("http://localhost:3000/tobaccoBrands")
    let data = await result.json()
    console.log(data)
})

test.only("POST: CREATE", async ({request})=>{
    let result = await request.post("http://localhost:3000/tobaccoBrandsCreateNew")
    
})

test("DELETE: DELETE", async ({request})=>{
    let result = await request.delete("http://localhost:3000/tobaccoBrandsDelete")
    expect(result.status()).toBe(200);
})