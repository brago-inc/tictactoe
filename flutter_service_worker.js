'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/assets/sfx/fwfwfwfwfw1.mp3": "46355605b43594b67a39170f89141dc1",
"assets/assets/sfx/README.md": "33033a0943d1325f78116fcf4b8a96ec",
"assets/assets/sfx/lalala1.mp3": "b0b85bf59814b014ff48d6d79275ecfd",
"assets/assets/sfx/yay1.mp3": "8d3b940e33ccfec612d06a41ae616f71",
"assets/assets/sfx/spsh1.mp3": "2e1354f39a5988afabb2fdd27cba63e1",
"assets/assets/sfx/swishswish1.mp3": "219b0f5c2deec2eda0a9e0e941894cb6",
"assets/assets/sfx/ehehee1.mp3": "52f5042736fa3f4d4198b97fe50ce7f3",
"assets/assets/sfx/p2.mp3": "ab829255f1ef20fbd4340a7c9e5157ad",
"assets/assets/sfx/haw1.mp3": "00db66b69283acb63a887136dfe7a73c",
"assets/assets/sfx/sh1.mp3": "f695db540ae0ea850ecbb341a825a47b",
"assets/assets/sfx/hh2.mp3": "4d39e7365b89c74db536c32dfe35580b",
"assets/assets/sfx/sh2.mp3": "e3212b9a7d1456ecda26fdc263ddd3d0",
"assets/assets/sfx/oo1.mp3": "94b9149911d0f2de8f3880c524b93683",
"assets/assets/sfx/fwfwfwfw1.mp3": "d0f7ee0256d1f0d40d77a1264f23342b",
"assets/assets/sfx/k1.mp3": "37ffb6f8c0435298b0a02e4e302e5b1f",
"assets/assets/sfx/wssh2.mp3": "255c455d9692c697400696cbb28511cc",
"assets/assets/sfx/hash3.mp3": "38aad045fbbf951bf5e4ca882b56245e",
"assets/assets/sfx/wehee1.mp3": "5a986231104c9f084104e5ee1c564bc4",
"assets/assets/sfx/hh1.mp3": "fab21158730b078ce90568ce2055db07",
"assets/assets/sfx/hash1.mp3": "f444469cd7a5a27062580ecd2b481770",
"assets/assets/sfx/wssh1.mp3": "cf92e8d8483097569e3278c82ac9f871",
"assets/assets/sfx/hash2.mp3": "d26cb7676c3c0d13a78799b3ccac4103",
"assets/assets/sfx/dsht1.mp3": "c99ece72f0957a9eaf52ade494465946",
"assets/assets/sfx/kch1.mp3": "a832ed0c8798b4ec95c929a5b0cabd3f",
"assets/assets/sfx/ws1.mp3": "5cfa8fda1ee940e65a19391ddef4d477",
"assets/assets/sfx/k2.mp3": "8ec44723c33a1e41f9a96d6bbecde6b9",
"assets/assets/sfx/kss1.mp3": "fd0664b62bb9205c1ba6868d2d185897",
"assets/assets/sfx/p1.mp3": "ad28c0d29ac9e8adf9a91a46bfbfac82",
"assets/assets/Permanent_Marker/PermanentMarker-Regular.ttf": "c863f8028c2505f92540e0ba7c379002",
"assets/assets/music/README.md": "035041cfb2070f794172dedb2aa709b6",
"assets/assets/music/Mr_Smith-Sonorus.mp3": "9353b7bb732002062e2c9107a95f3d2a",
"assets/assets/music/Mr_Smith-Sunday_Solitude.mp3": "5fb1f2fbf4314eb5df35b62706942698",
"assets/assets/music/Mr_Smith-Azul.mp3": "9463595498dc48b3d3d6805fb7c19dc7",
"assets/assets/fonts/iconfont.ttf": "61ab849333512158c9d47354c641aeec",
"assets/assets/images/4.png": "7aa7f2652bd42f7cfe128ba4e92a9cdb",
"assets/assets/images/logo_lockup_flutter_vertical_wht.png": "0bdc069af57528e88f6c6b891ad57b8d",
"assets/assets/images/scribble_sprites.png": "5794e8d12a4567464d2853eac2be9365",
"assets/assets/images/6.png": "4ce1f6c9f68a7d47b4b5813b58aec574",
"assets/assets/images/9.png": "9e7345e527b868d78c0d24cfc7eaf313",
"assets/assets/images/3.5x/4.png": "affd7950002a92e2cb0f35c7192c00a8",
"assets/assets/images/3.5x/6.png": "34eed2e6857d1c276c178b2ef19ed686",
"assets/assets/images/3.5x/9.png": "7aad7ee273207b9d1b3d429ed31cebc9",
"assets/assets/images/3.5x/0.png": "89a80b8c7b750de3b888d22824138e08",
"assets/assets/images/3.5x/cross-start-5.png": "2967c6fae85ec7fd312c53caf2a7ebce",
"assets/assets/images/3.5x/cross-end.png": "4e21e68e75959724b678a8f58760d448",
"assets/assets/images/3.5x/2.png": "025d1976e8ab94b0251f57dc53f6bbc9",
"assets/assets/images/3.5x/main-menu.png": "b3a43ed2b1a783c22cf88f29468d8da8",
"assets/assets/images/3.5x/cross-start.png": "9508a527bafdb7ebc5734f705f671199",
"assets/assets/images/3.5x/cross-start-3.png": "efda1b3e97a863a2b8b7fc0558f12530",
"assets/assets/images/3.5x/box.png": "0b1755411aedf4de22446558e6a14fcb",
"assets/assets/images/3.5x/5.png": "845b9e7c53050ab22a03d893fddbbb13",
"assets/assets/images/3.5x/settings.png": "c977a1e6c59e8cfd5cd88a0c973928fc",
"assets/assets/images/3.5x/7.png": "4663d6c24d7939b5444b2d8dc94b7681",
"assets/assets/images/3.5x/circle.png": "1cb0ccc499cace3b384cad9995e53988",
"assets/assets/images/3.5x/cross-end-1.png": "7e5551e37c43c913059ca9a61fa278f2",
"assets/assets/images/3.5x/cross-end-3.png": "76056e0e0643cf78757cf27bfb7ad4e0",
"assets/assets/images/3.5x/circle1.png": "f63f15dad0117e5434b7954b2925b2a5",
"assets/assets/images/3.5x/cross-start-1.png": "058afc5f3e8e01409a6bb19390ad218f",
"assets/assets/images/3.5x/circle2.png": "0fcbb59d19560259040638a2994bf0ec",
"assets/assets/images/3.5x/8.png": "4411f098456ed3bd73df40d704cb1d97",
"assets/assets/images/3.5x/circle5.png": "812b91d869489cc0e1452570923a7b0d",
"assets/assets/images/3.5x/bar.png": "cbb3c5586a0d8543b78448cd08f9fe63",
"assets/assets/images/3.5x/3.png": "39f2e5229f88529017e2c0f88423649b",
"assets/assets/images/3.5x/back.png": "85db134e26410547037485447f659277",
"assets/assets/images/3.5x/restart.png": "583169ac365d9515fc12f29e3b530de0",
"assets/assets/images/3.5x/cross-end-5.png": "c6f0c5fe673ec4e47e20fad591b15850",
"assets/assets/images/3.5x/cross-start-4.png": "4b5bdd9f3b37687bb35752f23a455108",
"assets/assets/images/3.5x/cross-end-2.png": "4aa5302ca8e7597df70f68c51e5348b5",
"assets/assets/images/3.5x/cross-end-4.png": "b4433b69cd955f5f19f39cdfcf1572fb",
"assets/assets/images/3.5x/1.png": "72d56b9d46bea54126679d3971c888df",
"assets/assets/images/3.5x/circle3.png": "80deda6af53829d9cf692a8c09903431",
"assets/assets/images/3.5x/cross-start-2.png": "0a5c7fd23294498a5dfae875405f2dc2",
"assets/assets/images/3.5x/circle4.png": "292661a7704d0d77051cbed5743d78d2",
"assets/assets/images/0.png": "397524390a71570688a27b774fd63f8a",
"assets/assets/images/cross-start-5.png": "2e4286f0c6e747895d63b794e5263af1",
"assets/assets/images/cross-end.png": "06bcd60f98e4b68692fea1bc1d3caa2a",
"assets/assets/images/cross.png": "8b22093f4f706d6aa4378b040a75084b",
"assets/assets/images/2.png": "3db30fd25e9a06de6534454829d3862f",
"assets/assets/images/main-menu.png": "d64e6f2ded1d583f98325cb95caeba43",
"assets/assets/images/cross-start.png": "e7e07ba24178b530d08ae7dd678f3e92",
"assets/assets/images/cross-start-3.png": "fd3c06ac9babbf970eb0f7c0c0bf1c26",
"assets/assets/images/box.png": "00aa34b9ad9b6b33ce884992300749a8",
"assets/assets/images/5.png": "77d89c7773a58f399831e8af5063afac",
"assets/assets/images/settings.png": "840fd7e3337c743046bf992ef18a10b8",
"assets/assets/images/7.png": "22ed9e7722ad5b2ae1dc99f59e7f01a6",
"assets/assets/images/circle.png": "c8f1270b88efaf82a10949255aca5fbb",
"assets/assets/images/cross-end-1.png": "70bfa033ce7f53147f890ed6e9e6ad57",
"assets/assets/images/dart.png": "735531cda11c098d9eed28ead619ab41",
"assets/assets/images/cross-end-3.png": "693698775d088f6b5719ac9897f852dc",
"assets/assets/images/circle1.png": "5e803478a7b2d7a39db231c3b5b94575",
"assets/assets/images/cross-start-1.png": "bb7a7e705a965e869e3b3139f36ad6a7",
"assets/assets/images/circle2.png": "f5c7a451c7f9f047737121a546395c0c",
"assets/assets/images/8.png": "d0d9274f49fdba1ae67ddd22e8b70edc",
"assets/assets/images/dart_dark.png": "bbe3eec92e8132c1fe26422c853b913a",
"assets/assets/images/circle5.png": "36e75e4755138181e82315db4c04d704",
"assets/assets/images/bar.png": "23830be13448eb9ed07673a7943a47ac",
"assets/assets/images/3.png": "afc9792ac737085f9e8e71a89f66cb02",
"assets/assets/images/back.png": "3c82301693d5c4140786184a06c23f7e",
"assets/assets/images/android12splash.png": "1b156e18a51eec7a6c707e7f32f323fb",
"assets/assets/images/2x/4.png": "86de283b6a438453114b7b767731f837",
"assets/assets/images/2x/6.png": "d574ec0a2663d39a9116fbd112943d11",
"assets/assets/images/2x/9.png": "7daed071b4300251f12d8b1f245aad99",
"assets/assets/images/2x/0.png": "4fb8e31f68f6a9b3d1535d6cc178d5f1",
"assets/assets/images/2x/cross-start-5.png": "3d8a929935e0f0e844b7d2563d57ff6b",
"assets/assets/images/2x/cross-end.png": "977f6aa252e6b32bc1ce7934aeaedc82",
"assets/assets/images/2x/cross.png": "52184e7d748853317076b18692fc5e50",
"assets/assets/images/2x/2.png": "15233c21723f147e8039c113e6bb4909",
"assets/assets/images/2x/main-menu.png": "6054cad9bd0f9dd572d8ea7e31325b91",
"assets/assets/images/2x/cross-start.png": "df32a9e0581cf2855ae173c635a7dc96",
"assets/assets/images/2x/cross-start-3.png": "5e7f7929d5edcfbd3468c7199a7b1652",
"assets/assets/images/2x/box.png": "535a56877aaca62029b611e41bbcc1bf",
"assets/assets/images/2x/5.png": "23a9e91fdabb92c49065a9fa8094be5f",
"assets/assets/images/2x/settings.png": "8404e18c68ba99ca0b181bd96ace0376",
"assets/assets/images/2x/7.png": "df179ec3b21669eb1738ebc1b3b35ad0",
"assets/assets/images/2x/circle.png": "527e2d76986c4656b861a6cb0b026da6",
"assets/assets/images/2x/cross-end-1.png": "58a909279d829afd5805228057e8c929",
"assets/assets/images/2x/cross-end-3.png": "009e404bb75c26cb2f7a0f14811b56b0",
"assets/assets/images/2x/circle1.png": "4187a8f11325d75d3da121eeddd1122b",
"assets/assets/images/2x/cross-start-1.png": "5de9f62b74efa263b37252de6906555b",
"assets/assets/images/2x/circle2.png": "73169c58f577d08e8f95f20fab36da16",
"assets/assets/images/2x/8.png": "f9c5157fae39e3eac4e4324b2927e781",
"assets/assets/images/2x/circle5.png": "840fc5d29b2ca85a46b34c0bc3c1cbc9",
"assets/assets/images/2x/bar.png": "1992f3e7d5ce33070e7aaebc5bd2ff61",
"assets/assets/images/2x/3.png": "ac4e30e08da4ca670c3d5023c5f624f7",
"assets/assets/images/2x/back.png": "85cda8f41a13153d6f3fb1c403f272ea",
"assets/assets/images/2x/restart.png": "83aea4677055df9b0d8171f5315f2a60",
"assets/assets/images/2x/cross-end-5.png": "ecdc6043397fb2b422c684e7e679ab47",
"assets/assets/images/2x/cross-start-4.png": "fa7ee39c55b6b2a87b5e5f53e7b0e893",
"assets/assets/images/2x/cross-end-2.png": "1e5b20aa45d194707c1b8048891e7fee",
"assets/assets/images/2x/cross-end-4.png": "83b19fc2760ed76982f55f41d5f98614",
"assets/assets/images/2x/1.png": "e2a169fcf8158c0076c65b567d83b1af",
"assets/assets/images/2x/circle3.png": "ee9641ba55a48e0474e5d571cb496c28",
"assets/assets/images/2x/cross-start-2.png": "91d310b9b2417be173b27009ea20cdca",
"assets/assets/images/2x/circle4.png": "16cb457da2b0d5c2086c0e1a61318605",
"assets/assets/images/restart.png": "d3d2e3f3b2f6cb1e1a69b8b2529096f7",
"assets/assets/images/3x/4.png": "884a2a25efe377b7fd0fdc4013927bdf",
"assets/assets/images/3x/6.png": "8acb1de34898618c630b7f1398c0ede0",
"assets/assets/images/3x/9.png": "ff8b6182ce521103b45c341573bf0a56",
"assets/assets/images/3x/0.png": "15bfdb9a7e7cb4691c7d3ff25b64f487",
"assets/assets/images/3x/cross-start-5.png": "e4b4ef5dc1aff4531747f7ae99388a72",
"assets/assets/images/3x/cross-end.png": "8da9e7e1e9f9c72653e5ad216ef9e8c6",
"assets/assets/images/3x/cross.png": "a3ddce39cac037e85acf57fe1d375e8f",
"assets/assets/images/3x/2.png": "7a2561d5a7515e468a547cbd33ee091d",
"assets/assets/images/3x/main-menu.png": "6b270d40d79a82e28fe48334633bc2f9",
"assets/assets/images/3x/cross-start.png": "c81fc2d75085e6886131c4fff8184750",
"assets/assets/images/3x/cross-start-3.png": "adee0980fdbf92317886dadbb11a108b",
"assets/assets/images/3x/box.png": "2533dd425aa1679768f1965b79399c0a",
"assets/assets/images/3x/5.png": "f2a11d415d25c30068e9b33ee09553e7",
"assets/assets/images/3x/settings.png": "21ff2cc135a762f74ed1a80aac6502bb",
"assets/assets/images/3x/7.png": "ef6ddb37b64c303e066ec729da64a09d",
"assets/assets/images/3x/circle.png": "45bd064cfb6d998a927b0f2e62a2ac2d",
"assets/assets/images/3x/cross-end-1.png": "c0dddffa63e81eccf1b73920067e2147",
"assets/assets/images/3x/cross-end-3.png": "e38904ef07d3abd15fd50fed87f79dea",
"assets/assets/images/3x/circle1.png": "420468d71d2eaca58d4c0b98ba6e9726",
"assets/assets/images/3x/cross-start-1.png": "7c94c67361a9e71bee14a82eda05fdbd",
"assets/assets/images/3x/circle2.png": "6463b7768bad74f417227e22688e170d",
"assets/assets/images/3x/8.png": "5e4e28a7967b6a6da23184a1e3b0c58b",
"assets/assets/images/3x/circle5.png": "103347593367e1e1999bd48006263024",
"assets/assets/images/3x/bar.png": "6046e0ec2e9a9d11b6aa31a334421991",
"assets/assets/images/3x/3.png": "a35a3e92a3fcfbe3624e3c16277453e0",
"assets/assets/images/3x/back.png": "88a977a654df5a490037340f90a5a19e",
"assets/assets/images/3x/restart.png": "429270ce832c881b80fbd592e5ff1e0e",
"assets/assets/images/3x/cross-end-5.png": "12ab0971afc5d10ce0af309fc59497f7",
"assets/assets/images/3x/cross-start-4.png": "b195f7deac22f3a5388275130e2d98f7",
"assets/assets/images/3x/cross-end-2.png": "ee62c8d0c5f73a225871dc837cf57271",
"assets/assets/images/3x/cross-end-4.png": "01f0336c274fb01dd92fb5af733443e8",
"assets/assets/images/3x/1.png": "d89b8eb1664e7b5a62325a3e83dbfa8a",
"assets/assets/images/3x/circle3.png": "60f3c52f44789514ae9650452e7f1046",
"assets/assets/images/3x/cross-start-2.png": "161f3080e3c8aa43b0c372cf4e5ddf61",
"assets/assets/images/3x/circle4.png": "49a528809a9f0079cda0b6d7ecde9af0",
"assets/assets/images/cross-end-5.png": "75ef85b96724694fdcdbcb62ba3bb2cc",
"assets/assets/images/cross-start-4.png": "437cea4ae170b9b4a7169ba9a7cb915e",
"assets/assets/images/cross-end-2.png": "6c836d654f02311b0a6170622cbbe09c",
"assets/assets/images/cross-end-4.png": "a02a530ab468914684ef73232ff719cd",
"assets/assets/images/logo_lockup_flutter_vertical.png": "ba4b1a14585b212fa1fcb6fce41e647c",
"assets/assets/images/1.png": "6a8fe3ebba8b1713433b3b03169af70b",
"assets/assets/images/circle3.png": "c288c43236486d465fdcf2c316659236",
"assets/assets/images/cross-start-2.png": "a259d9eaae6c7af8b8237bb6922b01b5",
"assets/assets/images/circle4.png": "bc3438a3551693f50dd856f349a574ec",
"assets/shaders/ink_sparkle.frag": "0cfae77e432d12ec44627f8d9eacbc65",
"assets/FontManifest.json": "407b6599c8a840492491f6b7f7d17bd8",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/packages/fluent_ui/assets/AcrylicNoise.png": "81f27726c45346351eca125bd062e9a7",
"assets/packages/fluent_ui/fonts/FluentIcons.ttf": "1cd173aed13e298ab2663dd0924f6762",
"assets/NOTICES": "c8a7c7d0d6b7e7a52504197bbc59f4d2",
"assets/AssetManifest.json": "5b7350a1e6867a5b50190520773285dd",
"manifest.json": "ab0858eb40919e261c32b1a1735dcb84",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/img/branding-dark-3x.png": "cb1d0203a8763a47eb93bbb3483782a8",
"splash/img/branding-2x.png": "3301fc1091fecd3d665a4604899ac58b",
"splash/img/branding-dark-1x.png": "97d64ef0611da1140aeedc770fb5ef66",
"splash/img/branding-1x.png": "b69a8b822697c0a2cb8397069c7dc205",
"splash/img/branding-dark-2x.png": "490a323baa9421fc6a5857f733d6dc95",
"splash/img/light-4x.png": "c14e7d7bdb5f3e95b0c067c5fe71e655",
"splash/img/dark-4x.png": "3872fcfbfee59fdc95d1e94b885c0e8f",
"splash/img/branding-dark-4x.png": "3b516d5c0997a1b30b2a97ead2a14734",
"splash/img/branding-4x.png": "f20ee9c5723cbf92c03f444942e6c53b",
"splash/img/dark-3x.png": "ddff9c2afc9ae725ee435dcb5fd89040",
"splash/img/light-1x.png": "ab1cbcce80981cd3e51785e663fad95b",
"splash/img/branding-3x.png": "9e0adb6598374bce94473d1a35153b95",
"splash/img/light-3x.png": "239469b76eda5aeb5e92cc169e889bdb",
"splash/img/dark-2x.png": "c24a0febf0d2f939e885abfa291fe7b1",
"splash/img/light-2x.png": "c0c5af0227d5e46c5cf7597f49defc8f",
"splash/img/dark-1x.png": "04959c8d602e924c37f5fbc55e69af2c",
"splash/style.css": "cbfe62a2c7e6af0e29b484d30610f3cf",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "66222d1ed9018524662a8bb2f2137a80",
"index.html": "2529d29d978a61464a56ec46d990e49b",
"/": "2529d29d978a61464a56ec46d990e49b",
"main.dart.js": "65628b862a069ebbda9556481dcccd86",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
