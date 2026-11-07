# KHỔNG MINH LỊCH — v1.0

WebApp React + Vite + TypeScript, không cần đăng nhập, không backend.

## Chạy trên máy

Cài Node.js 20.19+ hoặc 22.12+. Mở terminal trong thư mục dự án:

```bash
npm install
npm run dev
```

Mở địa chỉ Vite in ra (thường là http://localhost:5173).

## Build

```bash
npm run build
```

Thư mục xuất bản: `dist`.

## Đưa lên GitHub

1. Tạo repository mới (ví dụ `khong-minh-lich`), không khởi tạo README.
2. Trong thư mục dự án:

```bash
git init
git add .
git commit -m "Initial Khong Minh Lich app"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/khong-minh-lich.git
git push -u origin main
```

## Cloudflare Pages

1. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git.
2. Chọn repository `khong-minh-lich`.
3. Framework preset: Vite; Build command: `npm run build`; Build output directory: `dist`.
4. Deploy. Các lần push tiếp theo sẽ tự động triển khai.

## Cảnh báo về công thức

- Lục Diệu: `src/lib/calendar.ts`, hàm `hourResult`. Dùng quy ước ngày 1 tháng 1 âm và giờ Tý ứng với Đại An; các giờ tiếp theo tăng một cung. **Cần đối chiếu với bảng mẫu chuẩn trước khi tuyên bố kết quả đã được kiểm chứng**.
- Ngày Khổng Minh: nhãn trong `khongMinhDay` hiện là **dữ liệu minh họa chưa kiểm chứng**, chỉ hiển thị tham khảo, không tham gia đề xuất giờ. Nên thay bằng bảng đã xác minh hoặc ẩn nhãn trước khi phát hành rộng rãi.
- Dữ liệu cắt tóc 30 ngày: `src/data/haircut.json` nhập từ ảnh người dùng.
- Dữ liệu máy mắt 24 trường hợp: `src/data/eye.json` biên tập ngắn gọn từ ảnh người dùng.
- Dữ liệu chỉ phản ánh quan niệm dân gian, không có bằng chứng dự báo sự kiện.
- Chưa kiểm thử đầy đủ tháng nhuận, ranh giới giờ Tý, ngày 30 âm lịch và các ngày lịch sử.

## Bản quyền nội dung

Bảng dữ liệu đầu vào do người dùng cung cấp; nội dung đã biên tập ngắn gọn. Kiểm tra quyền sử dụng trước khi phát hành công khai.
