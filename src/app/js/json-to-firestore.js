import { initializeApp, firestore } from "firebase";
// Required for side-effects
import "firebase/firestore";

// Initialize Cloud Firestore through Firebase
initializeApp({
  apiKey: "AIzaSyDNOmYsQxThVOk38mFiClkfo1kwEYOq430",
  authDomain: "sismeals-recipes.firebaseapp.com",
  projectId: "sismeals-recipes",
});

var db = firestore();

var recipeList = [
  {
    "id": 1,
    "name": "Plantago lanceolata L.",
    "time": 24,
    "difficulty": "hard",
    "imgUrl": "dapibus",
    "ingredients": ["eggs", "milk", "flour", "sugar"],
    "description":
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
  },
  {
    "id": 2,
    "name": "Hyptis spicigera Lam.",
    "time": 23,
    "difficulty": "hard",
    "imgUrl": "orci",
    "ingredients": ["eggs", "milk", "flour", "sugar"],
    "description":
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
  },
  {
    "id": 3,
    "name": "Rubus scambens L.H. Bailey",
    "time": 117,
    "difficulty": "hard",
    "imgUrl": "molestie",
    "ingredients": ["eggs", "milk", "flour", "sugar"],
    "description":
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
  },
  {
    "id": 4,
    "name": "Astragalus toanus M.E. Jones",
    "time": 35,
    "difficulty": "easy",
    "imgUrl": "cras",
    "ingredients": ["eggs", "milk", "flour", "sugar"],
    "description":
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
  },
  {
    "id": 5,
    "name": "Gratiola virginiana L.",
    "time": 51,
    "difficulty": "hard",
    "imgUrl": "maecenas",
    "ingredients": ["eggs", "milk", "flour", "sugar"],
    "description":
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
  },
  {
    "id": 6,
    "name": "Astragalus oophorus S. Watson",
    "time": 9,
    "difficulty": "hard",
    "imgUrl": "ut",
    "ingredients": ["eggs", "milk", "flour", "sugar"],
    "description":
      "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
  },
  {
    "id": 7,
    "name": "Sedum eastwoodiae (Britton) A. Berger",
    "time": 22,
    "difficulty": "hard",
    "imgUrl": "ante",
    "ingredients": ["eggs", "milk", "flour", "sugar"],
    "description":
      "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
  },
  {
    "id": 8,
    "name": "Erigeron maniopotamicus G.L. Nesom & T.W. Nelson",
    "time": 20,
    "difficulty": "hard",
    "imgUrl": "congue",
    "ingredients": ["eggs", "milk", "flour", "sugar"],
    "description":
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.",
  },
  {
    "id": 9,
    "name": "Palustriella decipiens (De Not.) Ochyra",
    "time": 59,
    "difficulty": "hard",
    "imgUrl": "in",
    "ingredients": ["eggs", "milk", "flour", "sugar"],
    "description":
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
  },
  {
    "id": 10,
    "name": "Brachythecium rutabulum (Hedw.) Schimp.",
    "time": 23,
    "difficulty": "easy",
    "imgUrl": "pulvinar",
    "ingredients": ["eggs", "milk", "flour", "sugar"],
    "description":
      "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  },
  {
    "id": 11,
    "name": "Lobelia fenestralis Cav.",
    "time": 14,
    "difficulty": "easy",
    "imgUrl": "sit",
    "ingredients": ["eggs", "milk", "flour", "sugar"],
    "description":
      "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
  },
  {
    "id": 12,
    "name": "Viola aurea Kellogg",
    "time": 14,
    "difficulty": "easy",
    "imgUrl": "felis",
    "ingredients": ["eggs", "milk", "flour", "sugar"],
    "description":
      "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
  },
  {
    "id": 13,
    "name": "Myrsine pukooensis (Levl.) Hosaka",
    "time": 33,
    "difficulty": "hard",
    "imgUrl": "nulla",
    "ingredients": ["eggs", "milk", "flour", "sugar"],
    "description":
      "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
  },
  {
    "id": 14,
    "name": "Phalacroseris A. Gray",
    "time": 66,
    "difficulty": "easy",
    "imgUrl": "sapien",
    "ingredients": ["eggs", "milk", "flour", "sugar"],
    "description":
      "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
  },
  {
    "id": 15,
    "name": "Pachira aquatica Aubl.",
    "time": 62,
    "difficulty": "hard",
    "imgUrl": "mauris",
    "ingredients": ["eggs", "milk", "flour", "sugar"],
    "description":
      "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
  {
    "id": 16,
    "name": "Aletes sessiliflorus W.L. Theobald & C.C. Tseng",
    "time": 54,
    "difficulty": "easy",
    "imgUrl": "turpis",
    "ingredients": ["eggs", "milk", "flour", "sugar"],
    "description":
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
  },
  {
    "id": 17,
    "name": "Garrya wrightii Torr.",
    "time": 111,
    "difficulty": "medium",
    "imgUrl": "nulla",
    "ingredients": ["eggs", "milk", "flour", "sugar"],
    "description":
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
  },
  {
    "id": 18,
    "name": "Lesquerella valida Greene",
    "time": 73,
    "difficulty": "medium",
    "imgUrl": "nunc",
    "ingredients": ["eggs", "milk", "flour", "sugar"],
    "description":
      "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
  },
  {
    "id": 19,
    "name": "Crambe maritima L.",
    "time": 41,
    "difficulty": "hard",
    "imgUrl": "sed",
    "ingredients": ["eggs", "milk", "flour", "sugar"],
    "description":
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  },
  {
    "id": 20,
    "name": "Ficus stahlii Warb.",
    "time": 22,
    "difficulty": "medium",
    "imgUrl": "vestibulum",
    "ingredients": ["eggs", "milk", "flour", "sugar"],
    "description":
      "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
  },
  {
    "id": 21,
    "name": "Cuscuta attenuata Waterf.",
    "time": 60,
    "difficulty": "medium",
    "imgUrl": "eleifend",
    "ingredients": ["eggs", "milk", "flour", "sugar"],
    "description":
      "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
  },
  {
    "id": 22,
    "name": "Ceropegia woodii Schltr.",
    "time": 65,
    "difficulty": "medium",
    "imgUrl": "ut",
    "ingredients": ["eggs", "milk", "flour", "sugar"],
    "description":
      "Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
  },
  {
    "id": 23,
    "name": "Ernodea Sw.",
    "time": 94,
    "difficulty": "easy",
    "imgUrl": "viverra",
    "ingredients": ["eggs", "milk", "flour", "sugar"],
    "description":
      "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
  },
  {
    "id": 24,
    "name": "Parmelia omphalodes (L.) Ach.",
    "time": 96,
    "difficulty": "easy",
    "imgUrl": "non",
    "ingredients": ["eggs", "milk", "flour", "sugar"],
    "description":
      "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
  },
  {
    "id": 25,
    "name": "Opegrapha viridis (Pers. ex Ach.) Behlen & Desberger",
    "time": 12,
    "difficulty": "medium",
    "imgUrl": "vitae",
    "ingredients": ["eggs", "milk", "flour", "sugar"],
    "description":
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
  },
  {
    "id": 26,
    "name": "Grindelia nuda Alph. Wood",
    "time": 120,
    "difficulty": "medium",
    "imgUrl": "sed",
    "ingredients": ["eggs", "milk", "flour", "sugar"],
    "description":
      "Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
  },
  {
    "id": 27,
    "name": "Dalea urceolata Greene",
    "time": 19,
    "difficulty": "easy",
    "imgUrl": "vivamus",
    "ingredients": ["eggs", "milk", "flour", "sugar"],
    "description":
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
  },
  {
    "id": 28,
    "name": "Linanthus pungens (Torr.) J.M. Porter & L.A. Johnson",
    "time": 101,
    "difficulty": "hard",
    "imgUrl": "ac",
    "ingredients": ["eggs", "milk", "flour", "sugar"],
    "description":
      "Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
  },
  {
    "id": 29,
    "name": "Papaver bracteatum Lindl.",
    "time": 27,
    "difficulty": "easy",
    "imgUrl": "amet",
    "ingredients": ["eggs", "milk", "flour", "sugar"],
    "description":
      "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.",
  },
  {
    "id": 30,
    "name": "Usnea confusa Asah.",
    "time": 25,
    "difficulty": "hard",
    "imgUrl": "orci",
    "ingredients": ["eggs", "milk", "flour", "sugar"],
    "description":
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
  },
  {
    "id": 31,
    "name": "Viola selkirkii Pursh ex Goldie",
    "time": 94,
    "difficulty": "hard",
    "imgUrl": "quisque",
    "ingredients": ["eggs", "milk", "flour", "sugar"],
    "description":
      "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
  },
  {
    "id": 32,
    "name": "Vandenboschia Copeland",
    "time": 13,
    "difficulty": "easy",
    "imgUrl": "congue",
    "ingredients": ["eggs", "milk", "flour", "sugar"],
    "description":
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
  },
  {
    "id": 33,
    "name": "Asplenium insiticium Brack.",
    "time": 38,
    "difficulty": "medium",
    "imgUrl": "nibh",
    "ingredients": ["eggs", "milk", "flour", "sugar"],
    "description":
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  },
  {
    "id": 34,
    "name": "Draba cinerea M.F. Adams",
    "time": 99,
    "difficulty": "easy",
    "imgUrl": "porta",
    "ingredients": ["eggs", "milk", "flour", "sugar"],
    "description":
      "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
  },
  {
    "id": 35,
    "name": "Hieracium fendleri Sch. Bip. var. discolor A. Gray",
    "time": 72,
    "difficulty": "medium",
    "imgUrl": "vel",
    "ingredients": ["eggs", "milk", "flour", "sugar"],
    "description":
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
  },
  {
    "id": 36,
    "name": "Mimulus primuloides Benth.",
    "time": 120,
    "difficulty": "easy",
    "imgUrl": "semper",
    "ingredients": ["eggs", "milk", "flour", "sugar"],
    "description":
      "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
  },
  {
    "id": 37,
    "name": "Astranthium integrifolium (Michx.) Nutt.",
    "time": 18,
    "difficulty": "easy",
    "imgUrl": "rutrum",
    "ingredients": ["eggs", "milk", "flour", "sugar"],
    "description":
      "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
  },
  {
    "id": 38,
    "name": "Agropyron cristatum (L.) Gaertn. ssp. cristatum",
    "time": 17,
    "difficulty": "hard",
    "imgUrl": "donec",
    "ingredients": ["eggs", "milk", "flour", "sugar"],
    "description":
      "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
  },
  {
    "id": 39,
    "name": "Lepidium lasiocarpum Nutt.",
    "time": 54,
    "difficulty": "medium",
    "imgUrl": "curabitur",
    "ingredients": ["eggs", "milk", "flour", "sugar"],
    "description":
      "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
  },
  {
    "id": 40,
    "name": "Hesperolinon clevelandii (Greene) Small",
    "time": 9,
    "difficulty": "easy",
    "imgUrl": "ligula",
    "ingredients": ["eggs", "milk", "flour", "sugar"],
    "description":
      "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
  },
  {
    "id": 41,
    "name": "Linum rupestre (A. Gray) Engelm. ex A. Gray",
    "time": 80,
    "difficulty": "easy",
    "imgUrl": "semper",
    "ingredients": ["eggs", "milk", "flour", "sugar"],
    "description":
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
  },
  {
    "id": 42,
    "name": "Psoroma tenue Henssen var. borealis Henssen",
    "time": 97,
    "difficulty": "medium",
    "imgUrl": "convallis",
    "ingredients": ["eggs", "milk", "flour", "sugar"],
    "description":
      "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  },
  {
    "id": 43,
    "name": "Silene latifolia Poir.",
    "time": 68,
    "difficulty": "hard",
    "imgUrl": "consequat",
    "ingredients": ["eggs", "milk", "flour", "sugar"],
    "description":
      "In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  },
  {
    "id": 44,
    "name": "Sagittaria longiloba Engelm. ex J.G. Sm.",
    "time": 78,
    "difficulty": "easy",
    "imgUrl": "id",
    "ingredients": ["eggs", "milk", "flour", "sugar"],
    "description":
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.",
  },
  {
    "id": 45,
    "name": "Hygrophila triflora (Roxb.) Fosberg & Sachet",
    "time": 32,
    "difficulty": "medium",
    "imgUrl": "mauris",
    "ingredients": ["eggs", "milk", "flour", "sugar"],
    "description":
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
  },
  {
    "id": 46,
    "name": "Galanthus elwesii Hook. f.",
    "time": 78,
    "difficulty": "easy",
    "imgUrl": "porta",
    "ingredients": ["eggs", "milk", "flour", "sugar"],
    "description":
      "Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  },
  {
    "id": 47,
    "name": "Rubus parlinii L.H. Bailey",
    "time": 72,
    "difficulty": "easy",
    "imgUrl": "morbi",
    "ingredients": ["eggs", "milk", "flour", "sugar"],
    "description":
      "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
  },
  {
    "id": 48,
    "name": "Medicago turbinata (L.) All.",
    "time": 89,
    "difficulty": "medium",
    "imgUrl": "purus",
    "ingredients": ["eggs", "milk", "flour", "sugar"],
    "description":
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
  },
  {
    "id": 49,
    "name": "Nuphar lutea (L.) Sm. ssp. polysepala (Engelm.) E.O. Beal",
    "time": 49,
    "difficulty": "medium",
    "imgUrl": "curae",
    "ingredients": ["eggs", "milk", "flour", "sugar"],
    "description":
      "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
  },
  {
    "id": 50,
    "name": "Tropaeolum minus L.",
    "time": 55,
    "difficulty": "hard",
    "imgUrl": "justo",
    "ingredients": ["eggs", "milk", "flour", "sugar"],
    "description":
      "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.",
  },
];

recipeList.forEach(function (obj) {
  db.collection("recipes")
    .add({
      id: obj.id,
      name: obj.name,
      time: obj.time,
      difficulty: obj.difficulty,
      imgUrl: obj.imgUrl,
      ingredients: obj.ingredients,
      description: obj.description,
    })
    .then(function (docRef) {
      console.log("Document written with ID", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
});
