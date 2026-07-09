/**
 * DANH SÁCH DỮ LIỆU PORTFOLIO - TÔ QUỐC VINH
 * Bạn có thể dễ dàng thay đổi bất kỳ thông tin nào ở đây.
 * Code của website sẽ tự động cập nhật theo dữ liệu này!
 */

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

export interface SocialLinks {
  facebook: string;
  instagram: string;
  linkedin: string;
  tiktok: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  subTitle: string;
  bio: string;
  avatarUrl: string; // Có thể thay bằng link ảnh thật của bạn
  contact: ContactInfo;
  socials: SocialLinks;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  time: string;
  description: string;
  achievements: string[]; // Các thành tích nổi bật dưới dạng bullet point
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface Project {
  id: string;
  title: string;
  category: 'Marketing Campaign' | 'Photography' | 'Video' | 'Social Media';
  description: string;
  imageUrl: string; // URL ảnh dự án
  link?: string; // Link đến dự án (nếu có, không bắt buộc)
  tags: string[]; // Các thẻ tag ngắn gọn
}

export const personalInfo: PersonalInfo = {
  name: "Tô Quốc Vinh",
  title: "Marketing Executive",
  subTitle: "Brand Strategist & Creative Content Producer",
  // Đoạn giới thiệu ngắn về bản thân, kinh nghiệm, thế mạnh
  bio: "Tôi là một chuyên viên Marketing sáng tạo với hơn 3 năm kinh nghiệm thực chiến trong việc lập kế hoạch chiến dịch, quản lý mạng xã hội và sản xuất nội dung đa phương tiện. Với tư duy phân tích kết hợp cùng mắt thẩm mỹ nhạy bén trong nhiếp ảnh và dựng phim, tôi giúp các thương hiệu tối ưu hóa sự hiện diện kỹ thuật số và tạo ra những nội dung chạm đến cảm xúc của đối tượng mục tiêu.",
  // Bạn có thể đổi URL ảnh đại diện ở dưới đây. Nếu có ảnh cục bộ, hãy cho vào thư mục assets rồi import hoặc dùng link online.
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600&h=600",
  contact: {
    phone: "090 123 4567", // Thay số điện thoại thật ở đây
    email: "toquocvinhmc@gmail.com", // Email đã được tối ưu từ thông tin của bạn
    address: "Quận 1, Thành phố Hồ Chí Minh" // Thay địa chỉ ở đây
  },
  socials: {
    facebook: "https://facebook.com/toquocvinh", // Thay link facebook thật
    instagram: "https://instagram.com/toquocvinh", // Thay link instagram thật
    linkedin: "https://linkedin.com/in/toquocvinh", // Thay link linkedin thật
    tiktok: "https://tiktok.com/@toquocvinh" // Thay link tiktok thật
  }
};

// Sắp xếp từ gần nhất về xa nhất
export const workExperiences: Experience[] = [
  {
    id: "exp-1",
    company: "Dentsu Redder Agency",
    role: "Senior Marketing Executive",
    time: "10/2024 - Hiện tại",
    description: "Chịu trách nhiệm hoạch định chiến lược truyền thông xã hội và giám sát sản xuất nội dung sáng tạo cho các nhãn hàng tiêu dùng nhanh (FMCG).",
    achievements: [
      "Quản lý ngân sách chiến dịch social media lên đến 500 triệu VND/tháng, tối ưu hóa CPC giảm 25%.",
      "Dẫn dắt một campaign ra mắt sản phẩm mới đạt 2 triệu lượt tiếp cận tự nhiên (organic reach) chỉ trong 2 tuần.",
      "Phối hợp nhịp nhàng với đội ngũ thiết kế, dựng video và các KOLs lớn tại Việt Nam để đảm bảo KPI chiến dịch."
    ]
  },
  {
    id: "exp-2",
    company: "VCCorp (SohaGame / Kênh 14)",
    role: "Marketing Executive & Content Planner",
    time: "06/2022 - 09/2024",
    description: "Lập kế hoạch nội dung và quản lý vận hành fanpage, kênh TikTok, Youtube cho các dự án truyền thông và giải trí số.",
    achievements: [
      "Trực tiếp xây dựng và phát triển kênh TikTok từ con số 0 lên hơn 450,000 followers, đạt tổng cộng 12 triệu lượt thả tim.",
      "Viết kịch bản và chịu trách nhiệm hậu kỳ cho hơn 150 video ngắn quảng bá sản phẩm.",
      "Theo dõi số liệu, thực hiện báo cáo định kỳ về hiệu quả chiến dịch quảng cáo Meta Ads, TikTok Ads và Google Analytics."
    ]
  },
  {
    id: "exp-3",
    company: "Sora Media & Studio",
    role: "Marketing & Photography Assistant",
    time: "01/2021 - 05/2022",
    description: "Hỗ trợ sản xuất hình ảnh và xây dựng kế hoạch quảng cáo ban đầu cho các cửa hàng thời trang local brand tại Sài Gòn.",
    achievements: [
      "Phối hợp lên ý tưởng chụp hình lookbook, trực tiếp chụp và xử lý hậu kỳ (Adobe Lightroom / Photoshop).",
      "Hỗ trợ lên kế hoạch chạy quảng cáo Facebook Ads, tăng trưởng doanh thu bán lẻ online lên 40%.",
      "Xây dựng mạng lưới quan hệ với các mẫu ảnh (models) và KOC thời trang trẻ."
    ]
  }
];

// Danh sách kỹ năng chuyên môn (Hard skills)
export const hardSkills: Skill[] = [
  { name: "Digital Marketing & Ads", percentage: 92 },
  { name: "Social Media Strategy", percentage: 95 },
  { name: "Content Copywriting", percentage: 90 },
  { name: "Photography & Color Grading", percentage: 85 },
  { name: "Video Editing (Premiere / CapCut)", percentage: 88 },
  { name: "SEO & Google Analytics", percentage: 78 }
];

// Danh sách kỹ năng mềm (Soft skills)
export const softSkills: Skill[] = [
  { name: "Ý tưởng sáng tạo (Creative Thinking)", percentage: 95 },
  { name: "Kế hoạch & Dự án (Project Planning)", percentage: 90 },
  { name: "Thuyết trình & Giao tiếp", percentage: 88 },
  { name: "Làm việc nhóm (Team Collaboration)", percentage: 92 },
  { name: "Giải quyết vấn đề (Problem Solving)", percentage: 85 }
];

// Danh sách các dự án tiêu biểu trong mục Grid Gallery
export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Neon Future - Streetwear Launch Campaign",
    category: "Marketing Campaign",
    description: "Chiến dịch tích hợp ra mắt dòng sản phẩm thu đông cho một nhãn hàng thời trang đường phố, kết hợp giữa truyền thông kỹ thuật số và KOLs.",
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800&h=600",
    link: "https://behance.net",
    tags: ["Brand Strategy", "KOL Booking", "Meta Ads"]
  },
  {
    id: "proj-2",
    title: "Sài Gòn - Vệt Đêm & Những Phím Màu",
    category: "Photography",
    description: "Bộ ảnh nghệ thuật chụp phong cảnh và con người Sài Gòn về đêm dưới ánh đèn Neon rực rỡ, được triển lãm tại một workshop địa phương.",
    imageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=800&h=600",
    link: "https://unsplash.com",
    tags: ["Street Photography", "Lightroom", "Visual Art"]
  },
  {
    id: "proj-3",
    title: "Chạm Vị Giác - TVC Giới Thiệu Cà Phê Mới",
    category: "Video",
    description: "Video TVC ngắn (60 giây) quảng bá hương vị cà phê măng cụt kết tinh, trực tiếp thực hiện từ khâu viết kịch bản phân cảnh đến biên tập dựng hình.",
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800&h=600",
    link: "https://youtube.com",
    tags: ["Directing", "Video Editing", "Adobe Premiere"]
  },
  {
    id: "proj-4",
    title: "TikTok Growth Challenge: 0 to 100k",
    category: "Social Media",
    description: "Case study xây dựng thương hiệu cá nhân của một chuyên gia tài chính thông qua chuỗi video ngắn giáo dục độc đáo trên nền tảng TikTok.",
    imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800&h=600",
    link: "https://tiktok.com",
    tags: ["Short-form Video", "Algorithm Optimization", "Scriptwriting"]
  },
  {
    id: "proj-5",
    title: "Eco-Friendly Campaign: Sống Xanh Mỗi Ngày",
    category: "Marketing Campaign",
    description: "Kế hoạch truyền thông vì môi trường, thúc đẩy hành động tái chế chai nhựa của các bạn sinh viên tại các trường Đại học lớn khu vực phía Nam.",
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800&h=600",
    link: "https://behance.net",
    tags: ["PR Event", "Eco Campaign", "Community Growth"]
  },
  {
    id: "proj-6",
    title: "Cyberpunk Vibe Portrait Shoot",
    category: "Photography",
    description: "Bộ ảnh chân dung studio sử dụng kỹ thuật đánh đèn gel màu tương phản xanh-hồng sáng tạo, bắt nhịp xu hướng Cyberpunk hiện đại.",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800&h=600",
    link: "https://unsplash.com",
    tags: ["Portrait Photography", "Studio Lighting", "Photoshop"]
  }
];
