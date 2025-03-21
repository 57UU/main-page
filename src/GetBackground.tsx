const max_photo=21
function getPhotoUrl(index=-1){
    if(index<0){
        index=Math.trunc(Math.random()*max_photo)
    }
    return {img:`../bg/${index}.avif`,index:index}
}
export default getPhotoUrl;