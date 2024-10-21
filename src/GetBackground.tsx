const max_photo=2
function getPhotoUrl(){
    const index=Math.trunc(Math.random()*max_photo)
    return `../bg/${index}.avif`
}
export default getPhotoUrl;