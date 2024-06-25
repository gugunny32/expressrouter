import { data } from "../models/data.js"

// console.log(`data : ${data}`);

export const listBucket = async () => {
    // console.log(JSON.stringify(data));
    const result = await Promise.all(data.map(bucket => {
        return bucket.name
    }))
    // console.log(result);
    return result
}

export const listObject = (bucket) => {
    const result = [...data.filter(object => {
        return object.name === bucket
    })].pop()
    console.log(result);
    return result
}

export const inspectObject = (bucket, object) => {
    const result = listObject(bucket).item.filter(item => item === object).pop()
    console.log(result);
    return result
}