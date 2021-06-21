class monHoc {
    constructor(id, maMonHoc, tenMonHoc, bf, at, level, tinChi, batBuoc){
        this.maMonHoc = maMonHoc;
        this.tenMonHoc = tenMonHoc;
        this.bf = [...bf];
        this.at = [...at];
        this.level = level;
        this.tinChi = tinChi;
        this.id = id;
        this.batBuoc = batBuoc;
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
}
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

let addToAccordion = (id, from, to) => {
    const accordion_dc = document.querySelector('#'+id);
    for(let i=from;i<to;i++){
        let inf;
        let subject = new monHoc(i+1, maMH[i], tenMH[i], ['no'], ['no'], 3, 3, batBuoc[i]);
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

        if(subject.isBatBuoc()){
            let modal_bb = document.createElement('div');
            modal_bb.setAttribute('class','row bg-warning');
            modal_bb.appendChild(document.createTextNode('Bat buoc'));
            modalBody.appendChild(modal_bb);
        }

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