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
const tenMH = ["Giáo dục quốc phòng và An ninh 1",
  "Giáo dục quốc phòng và An ninh 2",
  "Giáo dục quốc phòng và An ninh 3",
  "Giáo dục quốc phòng và An ninh 4",
  "Giáo dục thể chất 1+2+3",
  "Anh văn căn bản 1",
  "Anh văn căn bản 2",
  "Anh văn căn bản 3",
  "Anh văn tăng cường 1",
  "Anh văn tăng cường 2",
  "Anh văn tăng cường 3",
  "Pháp văn căn bản 1",
  "Pháp văn căn bản 2",
  "Pháp văn căn bản 3",
  "Pháp văn tăng cường 1",
  "Pháp văn tăng cường 2",
  "Pháp văn tăng cường 3",
  "Triết học Mác - Lênin",
  "Kinh tế chính trị Mác - Lênin",
  "Chủ nghĩa xã hội khoa học",
  "Lịch sử Đảng Cộng sản Việt Nam",
  "Tư tưởng Hồ Chí Minh",
  "Pháp luật đại cương",
  "Logic học đại cương",
  "Xã hội học đại cương",
  "Cơ sở văn hóa Việt Nam",
  "Tiếng Việt thực hành",
  "Văn bản và lưu trữ học đại cương",
  "Kỹ năng mềm",
  "Đổi mới sáng tạo và khởi nghiệp",
  "Vi - Tích phân A1",
  "Vi - Tích phân A2",
  "Xác suất thống kê",
  "Đại số tuyến tính và hình học",
  "Kỹ năng học đại học",
  "Nền tảng công nghệ thông tin",

  "Toán rời rạc",
  "Lập trình căn bản A",
  "Cấu trúc dữ liệu",
  "Lý thuyết đồ thị",
  "Phân tích và thiết kế thuật toán",
  "Cơ sở dữ liệu",
  "Kiến trúc máy tính",
  "Nguyên lý hệ điều hành",
  "Mạng máy tính",
  "Lập trình hướng đối tượng",
  "Phân tích và thiết kế hệ thống",
  "Ngôn ngữ mô hình hóa",
  "Quản trị hệ thống",
  "Nhập môn lập trình Web",
  "Nhập môn trí tuệ nhân tạo",

  "Nhập môn mô phỏng",
  "Nền tảng phần mềm nhúng và IoT",
  "Quản lý quy trình nghiệp vụ",
  "Nhập môn công nghệ phần mềm",
  "Niên luận cơ sở ngành KTPM",
  "Nguyên lý xây dựng phần mềm",
  "Phân tích yêu cầu phần mềm",
  "Kiến trúc và Thiết kế phần mềm",
  "Đảm bảo chất lượng và Kiểm thử phần mềm",
  "Bảo trì phần mềm",
  "Quản lý dự án phần mềm",
  "Kiểm chứng mô hình",
  "Niên luận ngành Kỹ thuật phần mềm",
  "Thực tập thực tế - KTPM",
  "Lập trình Java",
  "Lập trình .NET",
  "Phát triển ứng dụng web",
  "Chuyên đề lập trình trên di động",
  "Ngôn ngữ lập trình mô phỏng",
  "Phát triển phần mềm mô phỏng",
  "Thiết kế hệ thống nhúng và IoT",
  "Phát triển phần mềm nhúng và IoT",
  "Kiến trúc phần mềm theo mô hình Client-Server",
  "Phát triển ứng dụng nghiệp vụ",
  "Quy hoạch tuyến tính",
  "Lý thuyết thông tin",
  "Nguyên lý máy học",
  "An ninh mạng",
  "An toàn hệ thống",
  "Điện toán đám mây",
  "Phát triển hệ thống thương mại điện tử",
  "Quản trị cơ sở dữ liệu",
  "Nghiệp vụ thông minh",
  "Xử lý ảnh",
  "Thiết kế và cài đặt mạng",
  "Tiểu luận tốt nghiệp - KTPM",
  "Luận văn tốt nghiệp - KTPM"

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
        btnModal.appendChild(document.createTextNode('Xem thêm'));
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
        footerCloseBtn.appendChild(document.createTextNode('Đóng'));
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