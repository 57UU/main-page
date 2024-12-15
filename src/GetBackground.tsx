const max_photo=19
function getPhotoUrl(){
    const index=Math.trunc(Math.random()*max_photo)
    return `../bg/${index}.avif`
}
export default getPhotoUrl;