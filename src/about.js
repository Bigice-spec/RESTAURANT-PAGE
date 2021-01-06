export default function theabout() {

    let thecontents = document.getElementById('content');

    let about = document.createElement('div');

    let themission = document.createElement('div');
    let thelocation = document.createElement('div');

    let theparagraph = document.createElement('p');

    let theimage = document.createElement('div');
    let thetext = document.createElement('div');

    let myimage = document.createElement('img');
    let mytext = document.createElement('p');

    about.className = 'about';
    themission.className = 'mission';
    thelocation.className = 'location';

    theparagraph.innerHTML = 'Our mission is';
    myimage.src = 'images/location.jpeg';
    mytext.innerHTML = 'We are located'

    thecontents.appendChild(about);
    about.append(themission, thelocation);
    themission.appendChild(theparagraph);
    thelocation.append(theimage, thetext);
    theimage.appendChild(myimage);
    thetext.appendChild(mytext);

}