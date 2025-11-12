"use client";

import { motion } from "framer-motion";
import Header from "@/components/header";
import SidebarNav from "@/components/sidebar-nav";
import EconomicStats from "@/components/economic-stats";
import ComparisonTool from "@/components/comparison-tool";
import Footer from "@/components/footer";

export default function EconomicPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      <Header />
      <div className="flex">
        <SidebarNav activeSection="economic" />
        <main className="flex-1">
          {/* Hero Section with Asymmetric Layout */}
          <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left side - Text with animations */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 text-sm font-medium">
                      Kinh tế Việt Nam
                    </span>
                  </motion.div>

                  <motion.h1
                    className="text-5xl md:text-6xl font-bold text-white leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    Tiềm lực
                    <br />
                    <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-600 bg-clip-text text-transparent">
                      Kinh tế
                    </span>
                  </motion.h1>

                  <motion.div
                    className="flex gap-4 pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="glass-dark px-6 py-3 rounded-lg">
                      <p className="text-emerald-400 font-bold text-2xl">
                        476.3B
                      </p>
                      <p className="text-gray-400 text-sm">GDP 2024 (USD)</p>
                    </div>
                    <div className="glass-dark px-6 py-3 rounded-lg">
                      <p className="text-cyan-400 font-bold text-2xl">7.09%</p>
                      <p className="text-gray-400 text-sm">Tăng trưởng</p>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Right side - Animated visual element */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative h-96 hidden lg:block"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-3xl blur-3xl" />
                  <div className="absolute inset-0 border border-emerald-500/30 rounded-3xl" />

                  {/* Floating cards */}
                  <motion.div
                    className="absolute top-8 left-8 glass-dark p-6 rounded-2xl w-48"
                    animate={{ y: [0, -20, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <p className="text-emerald-400 font-bold text-lg">
                      405.53B USD
                    </p>
                    <p className="text-gray-400 text-sm">Xuất khẩu 2024</p>
                  </motion.div>

                  <motion.div
                    className="absolute bottom-8 right-8 glass-dark p-6 rounded-2xl w-48"
                    animate={{ y: [0, 20, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: 0.5,
                    }}
                  >
                    <p className="text-cyan-400 font-bold text-lg">
                      38.23B USD
                    </p>
                    <p className="text-gray-400 text-sm">FDI đăng ký</p>
                  </motion.div>

                  <motion.div
                    className="absolute top-1/2 right-12 w-24 h-24 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full blur-2xl opacity-30"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* ================== PHẦN NỘI DUNG CHI TIẾT ================== */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 text-gray-200 space-y-32 max-w-6xl mx-auto">
            {/* ===== 1. VỐN FDI THỰC HIỆN ===== */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-emerald-400">
                1️⃣ Vốn FDI thực hiện (Lịch sử: 1988 - Hiện tại)
              </h2>
              <p className="leading-relaxed text-lg">
                Trước năm 1986, chúng ta gần như hoàn toàn phụ thuộc vào viện
                trợ và nằm trong vòng phong tỏa. Kinh tế đóng. Nhưng, kể từ Đổi
                mới, Việt Nam đã chuyển mình, chủ động mở cửa và biến sự ổn định
                chính trị thành "Thỏi nam châm" thu hút vốn.
                <br />
                <br />
                Tiềm lực kinh tế hiện tại của chúng ta nằm ở khả năng huy động
                nguồn lực bên ngoài một cách hiệu quả. Vốn FDI thực hiện đã tăng
                trưởng phi mã. Đỉnh cao là năm 2024, vốn thực hiện đạt con số kỷ
                lục hơn 25 tỷ USD, tăng 9.4% so với năm trước (10 tháng năm 2025
                ước đạt 21,3 tỷ USD, tăng 8,8% so với cùng kỳ năm trước). Đây là
                một sự khác biệt lịch sử, chứng minh nhà đầu tư quốc tế hoàn
                toàn tin tưởng vào khả năng sinh lời và sự an toàn của môi
                trường kinh tế Việt Nam.
              </p>

              <motion.div
                className="mt-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <img
                  src="/fdi_vietnam_1988_2024.png"
                  alt="FDI Việt Nam"
                  className="rounded-2xl shadow-lg w-full object-cover"
                />
              </motion.div>
            </motion.div>

            {/* ===== 2. KIM NGẠCH XNK VÀ CÁN CÂN THƯƠNG MẠI ===== */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-cyan-400">
                2️⃣ Kim ngạch XNK và cán cân thương mại (1990 - 2024)
              </h2>
              <p className="leading-relaxed text-lg">
                Trong thời kỳ bao cấp, thiếu đói và hàng hóa khan hiếm là thực
                tế phổ biến. Nhưng, nhờ chủ trương hội nhập sâu rộng, Kim ngạch
                Xuất Nhập Khẩu của chúng ta đã có bước đột phá không tưởng.
                <br />
                <br />
                Nếu những năm đầu Đổi mới, tổng kim ngạch chỉ tính bằng vài tỷ
                USD, thì đến năm 2024, con số này đã chạm mốc hơn 786 tỷ USD,
                giúp Việt Nam đứng vững trong Top 20 nền kinh tế hàng đầu thế
                giới về thương mại.
                <br />
                <br />
                Đặc biệt, việc trở thành quốc gia xuất siêu liên tục trong nhiều
                năm, với thặng dư gần 25 tỷ USD năm 2024, khẳng định tính tự chủ
                và năng lực sản xuất mạnh mẽ, biến Việt Nam thành "Công xưởng
                sản xuất" của thế giới.
              </p>

              <motion.div
                className="mt-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <img
                  src="/xuat_nhap_khau.png"
                  alt="Xuất nhập khẩu Việt Nam"
                  className="rounded-2xl shadow-lg w-full object-cover"
                />
              </motion.div>
            </motion.div>

            {/* ===== 3. XÃ HỘI & AN NINH ===== */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-emerald-300">
                3️⃣ Xã hội & An ninh
              </h2>
              <p className="leading-relaxed text-lg">
                Năm 1994, GDP bình quân đầu người của chúng ta chỉ là khoảng 200
                USD. Đó là thời kỳ đất nước còn nhiều khó khăn, thu nhập còn
                thấp.
                <br />
                <br />
                Nhưng nhờ công cuộc chấn hưng đất nước, con số này đã tăng lên
                hơn 4.700 USD vào năm 2024, và dự kiến sẽ vượt 5.000 USD trong
                năm 2025. Sự tăng trưởng này không chỉ đưa chúng ta vượt qua
                ngưỡng nước có thu nhập trung bình thấp, mà còn minh chứng cho
                việc chất lượng nguồn nhân lực và đời sống nhân dân đã được đặt
                lên hàng đầu và không ngừng cải thiện.
                <br />
                <br />
                Trước 1986, tình trạng thiếu đói phổ biến là một thực tế đau
                lòng. Nhưng ngày nay, Việt Nam đã trở thành hình mẫu toàn cầu về
                xóa đói giảm nghèo.
                <br />
                <br />
                Tỷ lệ hộ nghèo đa chiều đã được kéo giảm ngoạn mục xuống dưới 3%
                (ước tính 2023). Thành tựu này được Liên Hợp Quốc và Ngân hàng
                Thế giới công nhận là một trong những câu chuyện thành công nhất
                trên toàn thế giới về việc kết hợp tăng trưởng kinh tế với công
                bằng xã hội. Đây là Tiềm lực nhân văn, là niềm tự hào của cả dân
                tộc. (Cuối năm 2024, tỷ lệ hộ nghèo còn 1,93%. Mục tiêu là giảm
                xuống dưới 1% vào cuối năm 2025.)
                <br />
                <br />
                Sau chiến tranh, trong bối cảnh địa chính trị căng thẳng, thách
                thức an ninh là rất lớn. Nhưng Đảng và Nhà nước ta đã kiên trì
                giữ vững ổn định chính trị tuyệt đối, biến Việt Nam thành một
                quốc gia an toàn, hòa bình.
                <br />
                <br />
                Sự ổn định quốc phòng - an ninh này là "Tấm khiên vững chắc" cho
                mọi thành tựu kinh tế - xã hội. Nó còn mở rộng ra bên ngoài, khi
                Việt Nam chủ động tham gia các hoạt động gìn giữ hòa bình Liên
                Hợp Quốc, thể hiện vai trò và trách nhiệm của mình.
              </p>

              {/* ẢNH GDP BÌNH QUÂN */}
              <motion.div
                className="mt-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <img
                  src="/ty_le_ho_ngheo_vn_vn.png"
                  alt="GDP bình quân đầu người Việt Nam"
                  className="rounded-2xl shadow-lg w-full object-cover"
                />
              </motion.div>

              {/* ẢNH GIỮ GÌN HÒA BÌNH */}
            </motion.div>
          </section>

          <Footer />
        </main>
      </div>
    </div>
  );
}
