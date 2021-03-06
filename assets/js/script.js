class monHoc {
    constructor(id, maMonHoc, tenMonHoc, bf, at, level, tinChi, batBuoc, lyThuyet, thucHanh, songHanh, hocHe){
        this.maMonHoc = maMonHoc;
        this.tenMonHoc = tenMonHoc;
        this.bf = [...bf];
        this.at = [...at];
        this.level = level;
        this.tinChi = tinChi;
        this.id = id;
        this.batBuoc = batBuoc;
        this.lyThuyet = lyThuyet;
        this.thucHanh = thucHanh;
        this.songHanh = songHanh;
        this.hocHe = hocHe;
    }
    getThucHanh() {
        return this.thucHanh;
    }
    getLyThuyet() {
        return this.lyThuyet;
    }
    getTen() {
        return this.tenMonHoc;
    }
    getMa() {
        return this.maMonHoc;
    }
    getBefore() {
        return this.bf;
    }
    getAfter() {
        return this.at;
    }
    getLevel() {
        return this.level;
    }
    getTinChi() {
        return this.tinChi;
    }
    isBatBuoc() {
        return this.batBuoc;
    }
    getId(){
        return this.id;
    }
    getSongHanh(){
        return this.songHanh;
    }
    isHocHe(){
        return this.hocHe;
    }
}

class danhSach {
    constructor(){
        this.subject = [];
    }

    addToDs(subject){
        this.subject.push(subject);
    }
    getMonHoc(maMH){
        for(let i=0;i<this.subject.length;i++){
            if(this.subject[i].getMa() == maMH){
                return this.subject[i].getTen();
            }else{
                return maMH;
            }
        }
    }
    getCopy(i){
        return this.subject[i];
    }
}

// variable

const maMH = ["QP006","QP007","QP008","QP009","TC100","XH023","XH024","XH025","XH031","XH032","XH033","FL001","FL002","FL003","FL007","FL008","FL009","ML014","ML016","ML018","ML019","ML021","KL001","ML007","XH028","XH011","XH012","XH014","KN001","KN002","TN001","TN002","TN010","TN012","CT100","CT200",
    "CT172",
    "CT101",
    "CT177",
    "CT175",
    "CT174",
    "CT180",
    "CT173",
    "CT178",
    "CT112",
    "CT176",
    "CT296",
    "CT182",
    "CT179",
    "CT188",
    "CT190",

    "CT189",
    "CT295",
    "CT460",
    "CT113",
    "CT239",
    "CT240",
    "CT241",
    "CT242",
    "CT243",
    "CT244",
    "CT223",
    "CT287",
    "CT250",
    "CT474",
    "CT276",
    "CT246",
    "CT449",
    "CT483",
    "CT446",
    "CT456",
    "CT470",
    "CT457",
    "CT288",
    "CT459",
    "CT199",
    "CT292",
    "CT202",
    "CT211",
    "CT222",
    "CT233",
    "CT258",
    "CT205",
    "CT255",
    "CT316",
    "CT335",
    "CT505",
    "CT553"
];
const tenMH = ["Gi??o d???c qu???c ph??ng v?? An ninh 1",
  "Gi??o d???c qu???c ph??ng v?? An ninh 2",
  "Gi??o d???c qu???c ph??ng v?? An ninh 3",
  "Gi??o d???c qu???c ph??ng v?? An ninh 4",
  "Gi??o d???c th??? ch???t 1+2+3",
  "Anh v??n c??n b???n 1",
  "Anh v??n c??n b???n 2",
  "Anh v??n c??n b???n 3",
  "Anh v??n t??ng c?????ng 1",
  "Anh v??n t??ng c?????ng 2",
  "Anh v??n t??ng c?????ng 3",
  "Ph??p v??n c??n b???n 1",
  "Ph??p v??n c??n b???n 2",
  "Ph??p v??n c??n b???n 3",
  "Ph??p v??n t??ng c?????ng 1",
  "Ph??p v??n t??ng c?????ng 2",
  "Ph??p v??n t??ng c?????ng 3",
  "Tri???t h???c M??c - L??nin",
  "Kinh t??? ch??nh tr??? M??c - L??nin",
  "Ch??? ngh??a x?? h???i khoa h???c",
  "L???ch s??? ?????ng C???ng s???n Vi???t Nam",
  "T?? t?????ng H??? Ch?? Minh",
  "Ph??p lu???t ?????i c????ng",
  "Logic h???c ?????i c????ng",
  "X?? h???i h???c ?????i c????ng",
  "C?? s??? v??n h??a Vi???t Nam",
  "Ti???ng Vi???t th???c h??nh",
  "V??n b???n v?? l??u tr??? h???c ?????i c????ng",
  "K??? n??ng m???m",
  "?????i m???i s??ng t???o v?? kh???i nghi???p",
  "Vi - T??ch ph??n A1",
  "Vi - T??ch ph??n A2",
  "X??c su???t th???ng k??",
  "?????i s??? tuy???n t??nh v?? h??nh h???c",
  "K??? n??ng h???c ?????i h???c",
  "N???n t???ng c??ng ngh??? th??ng tin",

  "To??n r???i r???c",
  "L???p tr??nh c??n b???n A",
  "C???u tr??c d??? li???u",
  "L?? thuy???t ????? th???",
  "Ph??n t??ch v?? thi???t k??? thu???t to??n",
  "C?? s??? d??? li???u",
  "Ki???n tr??c m??y t??nh",
  "Nguy??n l?? h??? ??i???u h??nh",
  "M???ng m??y t??nh",
  "L???p tr??nh h?????ng ?????i t?????ng",
  "Ph??n t??ch v?? thi???t k??? h??? th???ng",
  "Ng??n ng??? m?? h??nh h??a",
  "Qu???n tr??? h??? th???ng",
  "Nh???p m??n l???p tr??nh Web",
  "Nh???p m??n tr?? tu??? nh??n t???o",

  "Nh???p m??n m?? ph???ng",
  "N???n t???ng ph???n m???m nh??ng v?? IoT",
  "Qu???n l?? quy tr??nh nghi???p v???",
  "Nh???p m??n c??ng ngh??? ph???n m???m",
  "Ni??n lu???n c?? s??? ng??nh KTPM",
  "Nguy??n l?? x??y d???ng ph???n m???m",
  "Ph??n t??ch y??u c???u ph???n m???m",
  "Ki???n tr??c v?? Thi???t k??? ph???n m???m",
  "?????m b???o ch???t l?????ng v?? Ki???m th??? ph???n m???m",
  "B???o tr?? ph???n m???m",
  "Qu???n l?? d??? ??n ph???n m???m",
  "Ki???m ch???ng m?? h??nh",
  "Ni??n lu???n ng??nh K??? thu???t ph???n m???m",
  "Th???c t???p th???c t??? - KTPM",
  "L???p tr??nh Java",
  "L???p tr??nh .NET",
  "Ph??t tri???n ???ng d???ng web",
  "Chuy??n ????? l???p tr??nh tr??n di ?????ng",
  "Ng??n ng??? l???p tr??nh m?? ph???ng",
  "Ph??t tri???n ph???n m???m m?? ph???ng",
  "Thi???t k??? h??? th???ng nh??ng v?? IoT",
  "Ph??t tri???n ph???n m???m nh??ng v?? IoT",
  "Ki???n tr??c ph???n m???m theo m?? h??nh Client-Server",
  "Ph??t tri???n ???ng d???ng nghi???p v???",
  "Quy ho???ch tuy???n t??nh",
  "L?? thuy???t th??ng tin",
  "Nguy??n l?? m??y h???c",
  "An ninh m???ng",
  "An to??n h??? th???ng",
  "??i???n to??n ????m m??y",
  "Ph??t tri???n h??? th???ng th????ng m???i ??i???n t???",
  "Qu???n tr??? c?? s??? d??? li???u",
  "Nghi???p v??? th??ng minh",
  "X??? l?? ???nh",
  "Thi???t k??? v?? c??i ?????t m???ng",
  "Ti???u lu???n t???t nghi???p - KTPM",
  "Lu???n v??n t???t nghi???p - KTPM"

];

const tinChi = [
    2,2,3,1,3,4,3,3,4,3,3,4,3,3,
    4,3,3,3,
    2,2,2,2,
    2,2,2,2,2,
    2,2,2,
    3,4,3,4,
    2,4,4,4,
    3,3,3,3,3,
    3,3,3,3,3,
    3,3,2,
    3,3,3,
    2,3,3,3,3,
    4,3,3,3,3,
    3,3,3,3,3,
    3,3,3,
    3,3,3,3,3,
    3,3,3,3,3,
    3,3,3,3,
    6,15
];

const batBuoc = [
    1,1,1,1,
    0,0,0,0,0,0,0,0,0,0,0,0,0,
    1,1,1,1,1,1,
    0,0,0,0,0,0,0,
    1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,

    1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
];

const lyThuyet = [

    30,20,20,10,0,60,45,45,60,45,45,60,45,45,60,45,45,45,30,30,30,30,
    30,30,30,30,30,30,20,20,45,60,45,60,20,45,

    60,30,30,30,30,30,45,30,30,30,30,30,30,30,30,
    30,30,30,20,0,45,30,30,45,30,30,30,0,0,30,30,30,30,30,30,30,

    30,30,30,30,30,30,30,30,30,30,30,30,30,30,0,0
];

const thucHanh = [
    0,0,65,10,90,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,

    0,0,0,0,0,0,20,20,0,0,0,0,20,30,
    0,60,30,30,30,30,0,30,30,30,30,30,30,30,0,
    30,30,30,20,90,0,30,30,30,30,30,30,90,90,30,30,30,30,30,30,30,
    30,30,30,30,30,
    30,30,30,30,30,
    30,30,30,30,
    180,450
];

const bf = [];

for(let i=0;i<88;i++){
    bf[i] = ['null'];
}

bf[6] = ['XH023'];
bf[7] = ['XH024'];
bf[8] = ['XH025'];
bf[9] = ['XH031'];
bf[10] = ['XH032'];
bf[12] = ['FL001'];
bf[13] = ['FL002'];
bf[14] = ['FL003'];
bf[15] = ['FL007'];
bf[16] = ['FL008'];

bf[18] = ['ML014'];
bf[19] = ['ML016'];
bf[20] = ['ML018'];
bf[21] = ['ML019'];

bf[31] = ['TN001'];
bf[38] = ['CT101'];
bf[39] = ['CT177'];
bf[40] = ['CT177'];
bf[41] = ['CT177'];

bf[43] = ['CT173'];
bf[44] = ['CT178'];
bf[45] = ['CT101'];
bf[46] = ['CT180'];
bf[47] = ['CT176'];

bf[51] = ['CT176'];
bf[52] = ['CT176'];
bf[53] = ['CT176'];

bf[55] = ['>= 90 TC','CT174'];
bf[56] = ['CT113','CT176','CT182'];
bf[57] = ['CT113','CT182'];
bf[58] = ['CT113'];
bf[59] = ['CT113'];

bf[60] = ['CT113'];
bf[62] = ['CT241'];
bf[63] = ['CT241','CT242','CT243','CT223'];

bf[64] = ['>= 120 TC'];
bf[65] = ['CT176'];
bf[66] = ['CT176'];

bf[68] = ['CT176'];
bf[69] = ['CT189'];
bf[70] = ['CT189'];
bf[71] = ['CT295'];
bf[72] = ['CT295'];
bf[73] = ['CT460'];
bf[74] = ['CT460'];
bf[78] = ['CT112'];
bf[81] = ['CT296'];
bf[82] = ['CT180'];
bf[83] = ['CT109'];
bf[84] = ['CT176'];
bf[85] = ['CT112'];
bf[86] = ['>= 120 TC'];
bf[87] = ['>= 120 TC'];

const songHanh = [];

songHanh[47] = ['CT180'];
songHanh[73] = ['CT459'];
songHanh[74] = ['CT288'];

const hkHe = [4,5,6,7,8,9,10,11,12,13,14,15,
    16,17,18,19,20,21,22,23,
    24,25,26,27,28,29,30,31,
    32,33,34,35,
    
    55,
    63,
    86
];

// end vaariable

let checkHe = (x)=>{
    for(let i=0;i<hkHe.length;i++){
        if(hkHe[i]==x) return 1;
    }
    return 0;
}
let allData = new danhSach();
// init data 

for(let i=0;i<maMH.length;i++){
    let subject = new monHoc(i+1, maMH[i], tenMH[i], bf[i], ['no'], 0, tinChi[i], batBuoc[i], lyThuyet[i], thucHanh[i], songHanh[i], checkHe(i));
    allData.addToDs(subject);
}

// 

let addToAccordion = (id, from, to) => {
    const accordion_dc = document.querySelector('#'+id);
    for(let i=from;i<to;i++){
        let inf;
        let subject = allData.getCopy(i);
        let temp = document.createElement('li');
        temp.setAttribute('class','list-group-item');

        let temp2 = document.createElement('div');
        temp2.setAttribute('class','row');

        // ma mon hoc
        let ma = document.createElement('div');
        ma.setAttribute('class','col-3');
        inf = document.createTextNode(subject.getMa());
        ma.appendChild(inf);

        // ten mon hoc
        let ten = document.createElement('div');
        ten.setAttribute('class','col-5');
        inf = document.createTextNode(subject.getTen());
        ten.appendChild(inf);

        // modal
        let bb = document.createElement('div');
        bb.setAttribute('class','col');
        let btnModal = document.createElement('button');
        btnModal.setAttribute('class','btn btn-primary');
        btnModal.setAttribute('data-bs-toggle','modal');
        btnModal.setAttribute('data-bs-target','#modal_'+subject.getId());
        btnModal.appendChild(document.createTextNode('Xem th??m'));
        bb.appendChild(btnModal);

        //// header
        let modalHeader = document.createElement('div');
        modalHeader.setAttribute('class','modal-header');
        let modalTitle = document.createElement('h5');
        modalTitle.setAttribute('class','modal-title');
        modalTitle.setAttribute('id','staticBackdropLabel');
        modalTitle.appendChild(document.createTextNode(subject.getTen()));
        let modalBtnClose = document.createElement('div');
        modalBtnClose.setAttribute('class','btn-close');
        modalBtnClose.setAttribute('data-bs-dismiss','modal');
        modalBtnClose.setAttribute('aria-label','Close');
        modalHeader.appendChild(modalTitle);
        modalHeader.appendChild(modalBtnClose);
        //// end header

        //// body
        let modalBody = document.createElement('div');
        modalBody.setAttribute('class','modal-body');
        let modal_mmh = document.createElement('div');
        modal_mmh.setAttribute('class','row');
        modal_mmh.appendChild(document.createTextNode('Ma mon hoc: '+subject.getMa()));
        modalBody.appendChild(modal_mmh);

        let modal_row2 = document.createElement('div');
        modal_row2.setAttribute('class','row');
        if(subject.isBatBuoc()){
            let modal_bb = document.createElement('div');
            modal_bb.setAttribute('class','col bg-warning white-color');
            modal_bb.appendChild(document.createTextNode('Bat buoc'));
            modal_row2.appendChild(modal_bb);
        }
        let modal_tc = document.createElement('div');
        modal_tc.setAttribute('class','col bg-success color-white');
        modal_tc.appendChild(document.createTextNode(subject.getTinChi()));
        modal_row2.appendChild(modal_tc);

        modalBody.appendChild(modal_row2);

        let modal_row3 = document.createElement('div');
        modal_row3.setAttribute('class','row');
        let modal_tietlt = document.createElement('div');
        modal_tietlt.setAttribute('class','col');
        modal_tietlt.appendChild(document.createTextNode(subject.getLyThuyet()+' tiet ly thuyet'));
        modal_row3.appendChild(modal_tietlt);
        let modal_tietth = document.createElement('div');
        modal_tietth.setAttribute('class','col');
        modal_tietth.appendChild(document.createTextNode(subject.getThucHanh()+' tiet thuc hanh'));
        modal_row3.appendChild(modal_tietth);
        modalBody.appendChild(modal_row3);

        let modal_row4 = document.createElement('div');
        modal_row4.setAttribute('class','row');
        let modal_tq = document.createElement('div');
        modal_tq.setAttribute('class','col');
        // for(let j=0;j<allData[i].get)
        modal_tq.appendChild(document.createTextNode(''));
        modal_row4.appendChild(modal_tq);
        let modal_sh = document.createElement('div');
        modal_sh.setAttribute('class','col');
        // modal_sh.appendChild(document.createTextNode('mon song hanh '+allData[i].getMonHoc(subject.getSongHanh())));
        modal_row4.appendChild(modal_sh);
        modalBody.appendChild(modal_row4);




        //// end body

        //// footer
        let modalFooter = document.createElement('div');
        modalFooter.setAttribute('class','modal-footer')
        let footerCloseBtn = document.createElement('button');
        footerCloseBtn.setAttribute('class','btn btn-secondary');
        footerCloseBtn.setAttribute('data-bs-dismiss','modal');
        footerCloseBtn.appendChild(document.createTextNode('????ng'));
        modalFooter.appendChild(footerCloseBtn);
        //// end footer
        let modalContent = document.createElement('div');
        modalContent.setAttribute('class','modal-content');
        modalContent.appendChild(modalHeader);
        modalContent.appendChild(modalBody);
        modalContent.appendChild(modalFooter);
        let modalDialog = document.createElement('div');
        modalDialog.setAttribute('class','modal-dialog');
        modalDialog.appendChild(modalContent);
        let modalDiv = document.createElement('div');
        modalDiv.setAttribute('class','modal fade');
        modalDiv.setAttribute('id','modal_'+subject.getId());
        modalDiv.setAttribute('data-bs-backdrop','static');
        modalDiv.setAttribute('data-bs-keyboard','false');
        modalDiv.setAttribute('tabindex','-1');
        modalDiv.setAttribute('aria-labelledby','staticBackdropLabel');
        modalDiv.setAttribute('aria-hidden','true');
        modalDiv.appendChild(modalDialog);

        bb.appendChild(modalDiv);
        
        temp2.appendChild(ma);
        temp2.appendChild(ten);
        temp2.appendChild(bb);

        temp.appendChild(temp2);
        accordion_dc.appendChild(temp);
    }
}


addToAccordion('accordion_dc',0,36);
addToAccordion('accordion_csn',36,51);
addToAccordion('accordion_cn',51,maMH.length);
console.log(allData);