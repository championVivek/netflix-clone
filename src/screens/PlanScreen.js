import React, {useState, useEffect} from 'react'
import db from '../firebase'
import "./PlanScreen.css"

function PlanScreen() {
    const [products, setProducts] = useState()

    // useEffect(() => {
    //  db.collection('products').where('active', true).get().then((querySnapshot) => {
    //      const products = {}
    //      querySnapshot.forEach(async productDoc => {
    //          products[productDoc.id] = productDoc.data();
    //          const priceSnap = await productDoc.ref.collection("prices").get()
    //      })
    //  })
    // }, [])

    return (
        <div className="planScreen">
            
        </div>
    )
}

export default PlanScreen
