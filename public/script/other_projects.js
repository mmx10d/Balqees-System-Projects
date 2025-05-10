const projects_btn = document.querySelectorAll('.projects_btn');


for(let i = 0 ; i < projects_btn.length; i++){
    p = projects_btn[i];
    p.onclick = () => {
        t = i + 1;
        switch( t ){
            case 1:
                location.href = '/projects/2d view';
                break;
            case 2:
                location.href = '/projects/Baniry';
                break;
            case 3:
                location.href = '/projects/cashe reader';
                break;
            case 4:
                location.href = '/projects/keyboardstyle';
                break;
            case 5:
                location.href = '/projects/learn the typing';
                break;
            case 6:
                location.href = '/projects/Media Player';
                break;
            case 7:
                location.href = '/projects/moamerprofile';
                break;
            case 8:
                location.href = '/projects/X O game';
                break;
            default:
                alert('error');
        }
    }
}