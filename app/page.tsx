"use client";

import Hero3D from "@/components/hero-3d";
import Header from "@/components/header";
import SidebarNav from "@/components/sidebar-nav";
import Footer from "@/components/footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-gray-100">
      <Header />
      <Hero3D />
      <div className="flex">
        <SidebarNav />

        <main className="flex-1 relative overflow-hidden">
          <div className="p-8 md:p-16 space-y-24">
            {/* --- PHẦN 1: BỐI CẢNH LỊCH SỬ --- */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.15 }}
              className="relative backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-3xl shadow-2xl"
            >
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent tracking-tight">
                1. Bối cảnh lịch sử: Khởi điểm và thách thức
              </h1>

              <div className="space-y-5 leading-relaxed text-lg text-gray-300">
                <p>
                  Sau khi đất nước thống nhất năm 1975, mặc dù có nhiều thành
                  tựu về chính trị – xã hội, nền kinh tế Việt Nam vẫn còn ở mức
                  rất thấp, bị ảnh hưởng bởi chiến tranh, khó khăn quốc tế, bao
                  vây kinh tế, và cơ cấu kinh tế mang tính quan liêu bao cấp.
                </p>
                <p>
                  Giai đoạn đầu của công cuộc đổi mới (từ năm 1986) – khi mà Đổi
                  mới được khởi xướng – là bước chuyển từ mô hình kế hoạch hóa
                  tập trung sang mô hình kinh tế thị trường định hướng xã hội
                  chủ nghĩa.
                </p>
                <p>
                  Xuất phát điểm thấp là một thực tế: theo dữ liệu của World
                  Bank, GDP bình quân đầu người Việt Nam tính theo USD năm 1994
                  còn rất thấp (có báo cáo cho khoảng ~200 USD hoặc ở mức rất
                  nghèo tương đối).{" "}
                  <span className="italic text-gray-400">
                    Nguồn: Ngân hàng Thế giới
                  </span>
                  .
                </p>
                <p>
                  Mục tiêu của bối cảnh lịch sử ở đây là để làm rõ cụm từ{" "}
                  <span className="font-semibold text-teal-300">
                    “chưa bao giờ có được”
                  </span>{" "}
                  – tức là phải đặt quá khứ thấp, khó khăn làm nền tảng để nhìn
                  ra sự thay đổi mang tính bước ngoặt.
                </p>
              </div>
            </motion.section>

            {/* --- PHẦN 2: KHẲNG ĐỊNH CƠ ĐỒ --- */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.1 }}
              className="relative backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-3xl shadow-2xl"
            >
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-pink-400 to-orange-300 bg-clip-text text-transparent tracking-tight">
                2. Khẳng định “Cơ đồ” – Quy mô nền tảng
              </h1>

              <div className="space-y-5 text-lg text-gray-300 leading-relaxed">
                <p>
                  Khi nói “cơ đồ”, chúng tôi hiểu là quy mô tổng thể của quốc
                  gia – kinh tế, thị trường, năng lực, vị thế phát triển – một{" "}
                  <span className="font-semibold text-orange-300">
                    “bước nhảy” so với quá khứ
                  </span>
                  .
                </p>
                <p>
                  Theo số liệu mới nhất, năm 2024, GDP Việt Nam ở mức khoảng{" "}
                  <span className="font-semibold text-teal-300">
                    11.511,9 nghìn tỷ đồng
                  </span>
                  , tương đương khoảng{" "}
                  <span className="font-semibold text-teal-300">
                    476,3 tỷ USD
                  </span>
                  .{" "}
                  <span className="italic text-gray-400">
                    Nguồn: Cục Thống kê Quốc gia
                  </span>
                  .
                </p>

                {/* ẢNH 1 */}
                <motion.div
                  className="mt-8 rounded-3xl overflow-hidden shadow-xl"
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <img
                    src="https://www.nso.gov.vn/wp-content/uploads/2025/02/anh.jpg"
                    alt="Thống kê kinh tế"
                    className="w-full object-cover hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </motion.div>

                <p>
                  Tốc độ tăng trưởng GDP năm 2024 đạt{" "}
                  <span className="font-semibold text-orange-300">7,09%</span>.{" "}
                  <span className="italic text-gray-400">
                    Nguồn: Vietnam Briefing
                  </span>
                  . Dự kiến trong nửa đầu năm 2025, nền kinh tế tiếp tục giữ đà
                  tăng: tăng trưởng GDP quý 3/2025 đạt khoảng{" "}
                  <span className="font-semibold text-orange-300">8,23%</span>{" "}
                  so với cùng kỳ năm trước.{" "}
                  <span className="italic text-gray-400">
                    Nguồn: Trading Economics
                  </span>
                  .
                </p>

                {/* ẢNH 2 */}
                <motion.div
                  className="mt-8 rounded-3xl overflow-hidden shadow-xl"
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <img
                    src="https://www.vietnam-briefing.com/news/wp-content/uploads/2025/01/Vietnam-Annual-GDP-Growth-2011-to-2024.png"
                    alt="Biểu đồ tăng trưởng GDP"
                    className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </motion.div>

                <p>
                  So với giai đoạn trước đổi mới, khi GDP đầu người chỉ vài trăm
                  USD và nền kinh tế phụ thuộc lớn vào viện trợ, xuất khẩu nhỏ…
                  thì đến nay quy mô ~476 tỷ USD thể hiện một{" "}
                  <span className="font-semibold text-teal-300">
                    “cơ đồ” phát triển khác biệt rõ ràng
                  </span>
                  .
                </p>
                <p>
                  Việc sở hữu quy mô kinh tế lớn hơn, hệ thống sản xuất, thị
                  trường mở rộng hơn, hội nhập quốc tế sâu hơn – tất cả đều tạo
                  thành{" "}
                  <span className="font-semibold text-teal-300">
                    “cơ đồ” mà trước kia chúng ta chưa từng có
                  </span>
                  .
                </p>

                {/* ẢNH 3 */}
                <motion.div
                  className="mt-8 rounded-3xl overflow-hidden shadow-xl"
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <img
                    src="/image.png"
                    alt="Tăng trưởng Việt Nam"
                    className="w-full object-cover hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </motion.div>
              </div>
            </motion.section>
          </div>

          <Footer />
        </main>
      </div>
    </div>
  );
}
