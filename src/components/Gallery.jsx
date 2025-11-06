import '../styles/Gallery.css'

export default function Gallery() {

    const images = [
        "galeriaImagen1.jpg",
        "galeriaImagen2.jpg",
        "galeriaImagen3.jpg",
    ];

    return (
        <section className="Gallery">
            <div className="Gallery-container">
                <div className="Gallery-content">
                    <div className="gallery-header">
                        <h2>Gallery</h2>
                    </div>
                    <div className="gallery-images">
                         {images.map((name, i) => (
                            <img
                            key={i}
                            src={`/galleryImages/${name}`} // ruta relativa a public/
                            alt={`Imagen ${i}`}
                            />
                        ))}
                        <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="imagen chica"/>
                    </div>
                </div>
            </div>
        </section>
    )
}