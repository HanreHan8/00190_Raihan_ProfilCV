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
    {nama: "Tailwind CSS", level: " jago"},
    {nama: "JavaScript", level:" jago"},
    {nama: "Music", level:"Mahir"},
];
console.log(`jumlah keahlian: ${keahlian.length}`);

const daftarSkill = document.getElementById("daftar-skill");

const buatPil= (skill) => {
    const li = document.createElement("li");
    li.textContent = skill.nama;
    li.className = "text-sm font-semibold px-3 py-1 rounded-full text-center";

    if (skill.level == "Mahir") {
        li.classList.add("bg-green-400", "text-red");
    }else {
        li.classList.add("bg-blue-300", "text-red");
    }
    return li;
};
    for (const skill of keahlian) {
        daftarSkill.append(buatPil(skill));
    }

const tombolMenu = document.querySelector("#tombol-menu");
const menuNav = document.querySelector("#menu-nav");

const toggleMenu = () => {
  menuNav.classList.toggle("hidden");
  menuNav.classList.toggle("flex");
};
tombolMenu.addEventListener("click", toggleMenu);

const tutupMenu = () => {
  menuNav.classList.add("hidden");
  menuNav.classList.remove("flex");
};

const linkMenu = document.querySelectorAll("#menu-nav a");

const tombolPendidikan = document.querySelector("#tombol-pendidikan");
const isiPendidikan = document.querySelector("#isi-pendidikan");
const ikonPendidikan = document.querySelector("#ikon-pendidikan");

tombolPendidikan.addEventListener("click", () => {
  isiPendidikan.classList.toggle("hidden");

  if (isiPendidikan.classList.contains("hidden")) {
    ikonPendidikan.textContent = "▸";
  } else {
    ikonPendidikan.textContent = "▾";
  }
});

const tombolTema = document.querySelector("#tombol-tema");

tombolTema.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");

  if (document.documentElement.classList.contains("dark")) {
    tombolTema.textContent = "☀️ Mode terang";
  } else {
    tombolTema.textContent = "🌙 Mode gelap";
  }
});