import { useRouter } from "next/router";

const CategoryPage = () => {
    const router = useRouter();
    // Mengambil query slug dari URL. slug akan berupa array dari parameter
    const { slug } = router.query;

    // Pastikan slug adalah array agar tidak error method .map (TS error)
    const slugArray = Array.isArray(slug) ? slug : (slug ? [slug] : []);

    return (
        <div style={{ padding: "20px" }}>
            <h1>Detail Kategori</h1>

            <table style={{ border: "1px solid black" }}>
                <thead style={{ border: "1px solid black" }}>
                    <tr>
                        <th style={{ border: "1px solid black" }}>Parameter</th>
                        <th style={{ border: "1px solid black" }}>Nilai</th>
                    </tr>
                </thead>
                <tbody>
                    {slugArray.map((param: string, index: number) => (
                        <tr key={index} style={{ border: "1px solid black" }}>
                            <td style={{ border: "1px solid black" }}>Parameter {index + 1}</td>
                            <td style={{ border: "1px solid black" }}>{param}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>Parameter URL yang ditangkap:</p>

            {/* Tampilkan parameter dalam bentuk list */}
            {slugArray.length > 0 ? (
                <ul>
                    {slugArray.map((param: string, index: number) => (
                        <li key={index}>Parameter {index + 1}: {param}</li>
                    ))}
                </ul>
            ) : (
                <p>Tidak ada parameter.</p>
            )}
        </div>
    );
};

export default CategoryPage;
