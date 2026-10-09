let totalKalori = 0;
let ulang;

do {
    console.log("=== PROGRAM HITUNG KALORI ===");
    console.log("1. Lari");
    console.log("2. Push-up");
    console.log("3. Plank");

    let pilihan = prompt("Pilih olahraga (1-3):");
    let waktu = Number(prompt("Masukkan durasi olahraga (menit):"));

    let kalori = 0;

    if (pilihan == "1") {
        kalori = (waktu / 5) * 60;
        console.log("Olahraga: Lari");
    } else if (pilihan == "2") {
        kalori = (waktu / 30) * 200;
        console.log("Olahraga: Push-up");
    } else if (pilihan == "3") {
        kalori = waktu * 5;
        console.log("Olahraga: Plank");
    } else {
        console.log("Pilihan olahraga tidak valid!");
    }

    if (pilihan == "1" || pilihan == "2" || pilihan == "3") {
        console.log("Durasi:", waktu, "menit");
        console.log("Kalori terbakar:", kalori, "kalori");
        totalKalori += kalori;
    }

    ulang = prompt("Mau melakukan aktivitas lain? (ya/tidak)");

} while (ulang.toLowerCase() == "ya");

console.log("Total kalori terbakar:", totalKalori, "kalori");