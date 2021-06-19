class monHoc {
    constructor(maMonHoc, tenMonHoc, bf, at, level, tinChi){
        this.maMonHoc = maMonHoc;
        this.tenMonHoc = tenMonHoc;
        this.bf = [...bf];
        this.at = [...at];
        this.level = level;
        this.tinChi = tinChi;
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
}
const maMH = ["QP006","QP007","QP008","QP009","TC100","XH023","XH024","XH025","XH031","XH032","XH033","FL001","FL002","FL003","FL007","FL008","FL009","ML014","ML016","ML018","ML019","ML021","KL001","ML007","XH028","XH011","XH012","XH014","KN001","KN002","TN001","TN002","TN010","TN012","CT100","CT200"];
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
  "Nền tảng công nghệ thông tin"

];
console.log(maMH);
console.log(tenMH);