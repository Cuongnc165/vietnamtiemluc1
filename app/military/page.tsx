"use client";

import { motion } from "framer-motion";
import Header from "@/components/header";
import SidebarNav from "@/components/sidebar-nav";
import MilitaryStrength from "@/components/military-strength";
import Footer from "@/components/footer";

export default function MilitaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-red-950 to-slate-950">
      <Header />
      <div className="flex">
        <SidebarNav activeSection="military" />
        <main className="flex-1">
          {/* ===== 1. Tổng kết 4 trụ cột ===== */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center space-y-6"
              >
                <h2 className="text-4xl font-bold text-white">Tổng kết</h2>
                <img
                  src="https://special.nhandan.vn/co-do-vi-the-va-uy-tin-quoc-te-cua-Vietnam-khi-buoc-vao-ky-nguyen-vuon-minh/assets/GR7vQqnWtm/vuon-minh-2560-x-1440-px-2560x1440.jpg"
                  alt="Cơ đồ – Tiềm lực – Vị thế – Uy tín"
                  className="mx-auto rounded-xl shadow-lg"
                />

                <div className="space-y-4 max-w-3xl mx-auto text-left">
                  <p className="text-lg">
                    <span className="font-bold text-red-400">Cơ đồ:</span>{" "}
                    <span className="text-gray-300">
                      Từ một nền kinh tế bao cấp, Việt Nam đã xây dựng được cơ
                      đồ vững chắc với quy mô kinh tế hàng trăm tỷ USD.
                    </span>
                  </p>
                  <p className="text-lg">
                    <span className="font-bold text-orange-400">Tiềm lực:</span>{" "}
                    <span className="text-gray-300">
                      Cả về kinh tế, xã hội lẫn quốc phòng, đất nước ta đã tích
                      lũy được nội lực mạnh mẽ, đủ sức chống chịu trước biến
                      động toàn cầu.
                    </span>
                  </p>
                  <p className="text-lg">
                    <span className="font-bold text-green-400">Vị thế:</span>{" "}
                    <span className="text-gray-300">
                      Việt Nam không còn là người đứng ngoài cuộc, mà đã trở
                      thành đối tác bình đẳng, có tiếng nói trong các cấu trúc
                      khu vực và quốc tế.
                    </span>
                  </p>
                  <p className="text-lg">
                    <span className="font-bold text-blue-400">Uy tín:</span>{" "}
                    <span className="text-gray-300">
                      Việt Nam được bạn bè quốc tế tin tưởng, đánh giá là quốc
                      gia có trách nhiệm, đáng tin cậy và yêu chuộng hòa bình.
                    </span>
                  </p>
                  <p className="text-lg text-gray-300">
                    Tất cả những yếu tố đó đã tạo nên một Việt Nam{" "}
                    <span className="font-semibold text-yellow-400">
                      tự tin – tự chủ – tự cường – hội nhập sâu rộng
                    </span>
                    .
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* ===== 2. Vai trò lãnh đạo của Đảng ===== */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
            <div className="max-w-7xl mx-auto space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-4xl font-bold text-yellow-400 text-center">
                  Vai trò lãnh đạo của Đảng – Nhân tố quyết định
                </h2>
                <div className="space-y-4 max-w-3xl mx-auto text-left text-gray-300">
                  <p>
                    Những thành tựu to lớn ấy không phải tự nhiên mà có. Đó là
                    kết quả của sự lãnh đạo{" "}
                    <span className="font-bold text-red-400">
                      đúng đắn, kiên định và sáng tạo
                    </span>{" "}
                    của Đảng Cộng sản Việt Nam, đứng đầu là{" "}
                    <span className="font-bold text-orange-400">
                      Tổng Bí thư Nguyễn Phú Trọng
                    </span>
                    .
                  </p>
                  <p>
                    <span className="font-bold text-green-400">
                      Tầm nhìn chiến lược:
                    </span>{" "}
                    Đảng định hướng phát triển bền vững, độc lập tự chủ gắn với
                    hội nhập quốc tế sâu rộng, giúp Việt Nam vững vàng vượt qua
                    khủng hoảng, dịch bệnh và biến động toàn cầu.
                  </p>
                  <p>
                    <span className="font-bold text-blue-400">
                      Trong sạch và kiên quyết:
                    </span>{" "}
                    Công tác xây dựng, chỉnh đốn Đảng cùng phương châm “đốt lò”
                    chống tham nhũng đã củng cố niềm tin của nhân dân, tạo nền
                    tảng phát triển lâu dài.
                  </p>
                  <p>
                    <span className="font-bold text-purple-400">
                      Tầm nhìn dài hạn:
                    </span>{" "}
                    Đại hội XIII xác định khát vọng đưa Việt Nam trở thành nước
                    phát triển, thu nhập cao vào năm 2045, minh chứng cho bản
                    lĩnh lãnh đạo của Đảng.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* ===== 3. Kết luận – Khẳng định nhận định của Tổng Bí thư ===== */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-4xl font-bold text-emerald-400 text-center">
                  Kết luận – Khẳng định nhận định của Tổng Bí thư
                </h2>
                <div className="space-y-4 max-w-3xl mx-auto text-left text-gray-300">
                  <p>
                    Từ các dẫn chứng về{" "}
                    <span className="font-bold text-red-400">
                      kinh tế, xã hội, đối ngoại và uy tín quốc tế
                    </span>
                    , có thể khẳng định rằng:
                  </p>
                  <p>
                    Nhận định của Tổng Bí thư Nguyễn Phú Trọng tại Đại hội XIII
                    –
                    <span className="font-semibold text-orange-400">
                      “Đất nước ta chưa bao giờ có được cơ đồ, tiềm lực, vị thế
                      và uy tín quốc tế như ngày nay”
                    </span>{" "}
                    – là hoàn toàn xác đáng, khách quan và đầy tự hào.
                  </p>
                  <p>
                    Nhìn lại hơn 35 năm Đổi mới, Việt Nam đã vươn lên mạnh mẽ,
                    từ một đất nước nghèo, bị bao vây cấm vận, trở thành{" "}
                    <span className="font-bold text-green-400">
                      quốc gia phát triển năng động, hội nhập sâu rộng và có
                      trách nhiệm toàn cầu
                    </span>
                    .
                  </p>
                  <p>
                    Đây là thành quả của cả dân tộc, minh chứng cho{" "}
                    <span className="font-bold text-blue-400">
                      bản lĩnh, trí tuệ và vai trò lãnh đạo của Đảng và Tổng Bí
                      thư Nguyễn Phú Trọng
                    </span>
                    .
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* ===== 4. Lời kết – Tinh thần tự hào và khát vọng tương lai ===== */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
            <div className="max-w-7xl mx-auto space-y-12 text-center">
              <motion.div>
                <p className="text-[48px] text-yellow-400 font-bold leading-relaxed max-w-3xl mx-auto uppercase text-justify">
                  Tự hào về cơ đồ hôm nay,{" "}
                  <span className="text-orange-400">
                    càng phải có trách nhiệm vun đắp cho cơ đồ ngày mai
                  </span>
                  .
                </p>
              </motion.div>
            </div>
          </section>

          {/* ===== Military Strength Visualization Section ===== */}

          <Footer />
        </main>
      </div>
    </div>
  );
}
