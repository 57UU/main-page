const max_photo=21
function getPhotoUrl(index=-1){
    if(index<0){
        index=Math.trunc(Math.random()*max_photo)
    }
    return `../bg/${index}.avif`
}
export default getPhotoUrl;