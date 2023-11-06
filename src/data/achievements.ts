export type Achievement = {
  title: string;
  issuer: string;
  certificate: string;
};

const achievements: Achievement[] = [
  {
    title: "1st Winner at I/O Fest Web Development Competition",
    issuer: "Tarumanagara University",
    certificate: "/",
  },
  {
    title: "1st Winner at LKS Cyber Security Regional DKI Jakarta",
    issuer: "DKI Jakarta Regional Education Department",
    certificate: "https://drive.google.com/file/d/13TQqCTcpKVSBnJJxqrjKthxK1z0SUZ9Q/view",
  },
  {
    title: "Medallion for Exellence at LKS Cyber Security National",
    issuer: "Ministry of Education and Culture Republic of Indonesia",
    certificate: "https://drive.google.com/file/d/1-qYHgI4XbB7-9AASFFYl1gW2gNya_kYT/view",
  },
  {
    title: "Grand Finalist at Software Dev and Logical Competition",
    issuer: "Binus University",
    certificate: "/",
  },
];

export default achievements;
