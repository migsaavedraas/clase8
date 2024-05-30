var app = new Vue({
    el: '#app',
    data: {
        titulo: 'Esta es mi primera vez en Vue',
        see: true,
        pollerias: [
            { nombre: 'Pardos' },
            { nombre: 'Norkys' },
            { nombre: 'Kykos' },
            { nombre: 'La Leña' }
        ],
        discotecas: [
            {
                nombre: 'Discoteca 1',
                imagen: 'app/img/image1.jpg', // Asegúrate de tener las imágenes en la carpeta correcta
                descripcion: 'Salsoteca',
                ubicacion: 'Lince'
            },
            {
                nombre: 'Discoteca 2',
                imagen: 'app/img/image2.jpg', // Asegúrate de tener las imágenes en la carpeta correcta
                descripcion: 'Karaoke',
                ubicacion: 'Los Olivos'
            },
            {
                nombre: 'Discoteca 3',
                imagen: 'app/img/image3.jpg', // Asegúrate de tener las imágenes en la carpeta correcta
                descripcion: 'Rockera',
                ubicacion: 'Carabayllo'
            }
        ]
    }
});
