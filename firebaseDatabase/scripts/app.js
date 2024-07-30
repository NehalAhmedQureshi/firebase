import { collection, db, addDoc, serverTimestamp, doc, onSnapshot, getDocs } from "./firebase.js";
const addProductForm = document.querySelector("#addProductForm")
const productAddButton = document.querySelector("#addButton")


const allProducts = document.querySelector(".printer")


const querySnapshot = await getDocs(collection(db, "products"));
querySnapshot.forEach((doc) => {
    console.log(doc);
    const stampTime = doc._document.data.value.mapValue.fields.createdAt.timestampValue
    console.log(doc._document.data.value.mapValue.fields.productName.stringValue);
});


addProductForm.addEventListener("submit", async (e) => {
    e.preventDefault()

    // Import inputs by className
    const productName = document.querySelector(".productName")
    const productType = document.querySelector(".productType")
    const productPrice = document.querySelector(".productPrice")

    const myCollectionStoreReferance = collection(db, "products")
    const products = {
        productName: productName.value,
        productType: productType.value,
        productPrice: Number(productPrice.value),
        createdAt: serverTimestamp(),
    };
    productAddButton.disabled = true;
    addProductForm.reset();
    try {
        const docRef = await addDoc(myCollectionStoreReferance, products);
        console.log("Document written with ID: ", myCollectionStoreReferance.id);
        console.log("🚀 ~ addProductForm.addEventListener ~ docRef:", docRef.id)
        productAddButton.disabled = false
    } catch (e) {
        console.error("Error adding document: ", e);
    }
})

