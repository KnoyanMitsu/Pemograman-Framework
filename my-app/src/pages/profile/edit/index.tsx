const ProfileEdit = () => {
    return (
        <div>
            <h1>Edit Profile</h1>
            <form>
                <div>
                    <label htmlFor="nama">Nama: </label>
                    <input type="text" id="nama" name="nama" defaultValue="Fabian Ananda Merdana" />
                </div>
                <br />
                <div>
                    <label htmlFor="nim">NIM: </label>
                    <input type="text" id="nim" name="nim" defaultValue="222107023004" />
                </div>
                <br />
                <div>
                    <label htmlFor="programStudi">Program Studi: </label>
                    <input type="text" id="programStudi" name="programStudi" defaultValue="Teknik Informatika" />
                </div>
                <br />
                <button type="submit">Simpan</button>
            </form>
        </div>
    )
}

export default ProfileEdit;
