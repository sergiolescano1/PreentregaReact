const products=[
{
    id:'1',
    name:'ASUS',
    price:'$200000',
    category:'notebook',
    stock:25,
    description: 'Procesador: Intel® Celeron® N4020 Processor 1.1 GHz (4M Cache, up to 2.6 GHz)\n' +
    'Sistema Operativo: Windows 11 Home\n' +
    'Memoria: 4 GB DDR4\n' +
    'Pantalla: 15.6" LED-backlit HD (1366x768) 60Hz Anti-Glare Panel with 45% NTSC\n' +
    'Gráficos: Intel® UHD Graphics 600\n' +
    'Almacenamiento Primario: 128gb SSD PCIE NVME\n' +
    'Almacenamiento Secundario: Slot Sata Libre.\n' +
    'Teclado: Chiclet Español.\n' +
    'Lector de tarjetas: Micro SD\n' +
    'WebCam: VGA Webcam.\n' +
    'Redes: Integrated Wi-Fi (802.11 ac)\n' +
    'Bluetooth® 4.1\n' +
    'Interfaz:',
    url: 'https://http2.mlstatic.com/D_NQ_NP_2X_999574-MLA50433188313_062022-F.webp'
},
{id:'2',
name:'DELL INSPIRON',
price:300000,
category:'notebook',
stock:5, 
description:
      'La Notebook Dell Inspiron 3501 en color negro es la compañera perfecta para tus tareas diarias y entretenimiento. Con su procesador Intel Core i3 y 4GB de memoria RAM, disfrutarás de un rendimiento fluido y eficiente en tus actividades cotidianas. Su disco rígido de 1TB te brinda espacio suficiente para almacenar todos tus archivos y documentos importantes. La pantalla LED de 15.55" con resolución HD y tecnología antirreflejo te permitirá disfrutar de imágenes nítidas y claras, mientras que la tarjeta gráfica Intel UHD Graphics G1 asegura una experiencia visual de calidad.\n\n' +
      'Esta notebook cuenta con conectividad Wi-Fi y Bluetooth para mantenerte siempre conectado, y una variedad de puertos, incluyendo HDMI, USB y puerto Ethernet, para conectar todos tus dispositivos y accesorios. La cámara web HD y el micrófono integrados facilitan las videollamadas y reuniones en línea, mientras que la salida para auriculares te permite disfrutar de tu música y contenido multimedia sin interrupciones.',
    url: 'https://http2.mlstatic.com/D_NQ_NP_2X_834817-MLA49842217106_052022-F.webp'},
    {
        id: '3',
        name: 'Apple MacBook Pro',
        price: '$500000',
        category: 'laptop',
        stock: 10,
        description:
          'El Apple MacBook Pro es una potente computadora portátil diseñada para ofrecer un rendimiento excepcional y una experiencia de usuario de primera clase. Estas son algunas de las características destacadas de este producto:\n\n' +
          '- Chip M1 de Apple que permite un gran avance en el rendimiento del CPU, GPU y aprendizaje automático.\n' +
          '- Hasta 18 horas de duración de la batería para que puedas hacer mucho más.\n' +
          '- CPU de 8 núcleos con un rendimiento hasta 3.5 veces más rápido para que puedas realizar tareas exigentes a una velocidad insuperable.\n' +
          '- GPU de hasta 8 núcleos con gráficos hasta 5 veces más rápidos, lo que proporciona un rendimiento excepcional en aplicaciones y juegos con gráficos avanzados.\n' +
          '- Neural Engine de 16 núcleos para un aprendizaje automático avanzado.\n' +
          '- 8 GB de memoria unificada para un rendimiento más rápido y fluido en todas las tareas.\n' +
          '- Almacenamiento SSD superrápido que permite abrir aplicaciones y archivos al instante.\n' +
          '- Diseño silencioso, sin ventilador, para un funcionamiento silencioso y una experiencia libre de ruido.\n' +
          '- Pantalla Retina de 13.3 pulgadas con una amplia gama de colores P3, que ofrece imágenes vibrantes y un nivel de detalle increíble.\n' +
          '- Cámara FaceTime HD con procesador de señal de imagen avanzado para llamadas de video claras y nítidas.\n',
        url: 'https://http2.mlstatic.com/D_NQ_NP_2X_801112-MLA46516512347_062021-F.webp'
      }

]

export const getProducts=()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)        
        },500)
    })
}



export const getProductById=(productId)=> { //devuelve funcon a mostrar y se guarda en itemdetailcontainer en producto
    return new Promise((resolve)=>{
        setTimeout(()=> {
            resolve (products.find (prod=> prod.id===productId))
        
    },500)
})
}
export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
    setTimeout(() => {
        const filteredProducts = products.filter((prod) => prod.category === category);
        resolve(filteredProducts);
    }, 500);
    });
}

/* funcion de prueba
export const getProductsByCategory1 = (category) => {
    return new Promise((resolve) => {
    setTimeout(() => {
        const filteredProducts = products.filter((prod) => prod.category === category);
        resolve(filteredProducts);
    }, 500);
    });
}*/





