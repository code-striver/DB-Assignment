import mongoose, { Schema } from 'mongoose';
/*There is only code. Since the requirement of the assesent only includes a schema.js file
therefore no external packages are installed. Its only a JS file*/

const productCategorySchema = new Schema({
    id:Number,
    name:String,
    desc:String,
    created_at:Date,
    modified_at:Date,
    deleted_at:Date
})

const productInventorySchema = new Schema({
    id:Number,
    quantity:Number,
    created_at:Date,
    modified_at:Date,
    deleted_at:Date
})

const disountSchema = new Schema({
    id:Number,
    name:String,
    desc:String,
    discount_percent:Decimal128,
    active:Boolean,
    created_at:Date,
    modified_at:Date,
    deleted_at:Date
})

const productSchema = new Schema({
    id:Number,
    name:String,
    desc:String,
    category:{type:Number, ref:'product_category',localField:'category_id',
    foreignField:'id'},
    //wherein product_category may be name of the collection for Product Category in DB
    inventory:{type:Number,ref:'product_inventory', localField:'inventory_id',
    foreignField:'id'},
    //wherein product_inventory may be name of the collection for Product Inventory in DB
    price:Decimal128,
    discount_id:{typeof:Number, ref:'discount', localField:'discount_id', 
    foreignField:'id'},
    //wherein discount may be name of the collection for Discount in DB 
    created_at:Date,
    modified_at:Date,
    deleted_at:Date
})
