console.log("script.js Terhubung!");

const profil= {
    nama: "Raihan Rizqy Sinatriya",
    univ: "UDINUS",
    prodi: "SI",
    semester: 3,
};
const sapaan = `halo, Saya ${profil.nama}, Mahasiswa ${profil.univ}, Prodi ${profil.prodi}, Semester ${profil.semester}.`;
console.log(sapaan);
console.log(typeof profil.nama, typeof profil.semester);

const keahlian = [
    {nama: "HTML5", level: "Mahir"},
    {nama: "CSS3", level: "Mahir" },
    {nama: "Tailwind CSS", level: "Hampir jago"},
    {nama: "JavaScript", level:"Hampir jago"},
    {nama: "Music", level:"Mahir"},
];
console.log(`jumlah keahlian: ${keahlian.length}`);

for (const skill of keahlian) {
    console.log(`${skill.nama} (${skill.level})`);
};