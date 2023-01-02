const typesMock = {
  string: [
    "Proident qui voluptate anim esse irure nulla sunt est elit ipsum labore qui nostrud excepteur.",
    "Fugiat aliqua duis qui laborum voluptate dolor commodo occaecat ipsum dolor reprehenderit nisi nisi.",
    "Nostrud sit nulla id velit deserunt.",
    "Labore officia magna eu consectetur.",
    "Velit adipisicing nulla ipsum esse cillum reprehenderit nostrud incididunt fugiat.",
    "Fugiat nisi sit aute aliquip irure.",
    "Officia nulla et ex exercitation in nostrud dolore proident sunt laborum dolore tempor tempor.",
    "Anim ullamco esse nulla ea sint pariatur consequat irure incididunt minim ullamco sit labore anim.",
    "In non Lorem exercitation excepteur veniam ullamco ex elit proident aute reprehenderit officia enim.",
    "Laborum ullamco ut consequat consectetur ut laboris.",
    "Laborum ullamco sint qui minim veniam eiusmod quis amet fugiat eiusmod officia elit nostrud in.",
    "Est culpa dolore culpa ut tempor qui nisi nulla.",
    "Anim sunt ipsum excepteur quis ea sunt id in adipisicing cupidatat voluptate.",
    "Adipisicing sit ad enim dolor nisi fugiat reprehenderit culpa commodo exercitation proident.",
    "Sunt sit sit dolore ex velit proident cillum do magna excepteur elit.",
    "Nulla cupidatat ipsum labore ut reprehenderit officia exercitation pariatur non occaecat sint.",
    "Quis dolore in occaecat tempor ullamco esse ipsum mollit.",
    "Nisi reprehenderit magna amet esse aliquip ullamco quis Lorem qui aute reprehenderit in.",
    "Aute id laboris veniam ea velit adipisicing aliqua nulla elit labore ea.",
    "Aliqua amet eiusmod laborum occaecat amet ut.",
    "Ipsum amet non aliquip mollit nulla irure labore Lorem Lorem esse.",
    "Elit labore et ipsum dolore magna laborum in amet.",
    "Enim esse laborum dolore fugiat excepteur nisi enim mollit sit esse ipsum.",
    "Eu consequat exercitation occaecat et ut sit ea eu.",
    "Consequat dolor eu ea eu do sit proident ipsum labore deserunt deserunt.",
    "Aliqua non consectetur mollit velit fugiat officia ad.",
    "Exercitation id sint mollit reprehenderit dolore Lorem proident id incididunt fugiat.",
    "Adipisicing mollit reprehenderit veniam reprehenderit sint commodo excepteur dolore incididunt ad mollit consequat incididunt id.",
    "Anim Lorem cupidatat excepteur fugiat proident occaecat ad qui quis est nostrud ut.",
    "Cupidatat consectetur cillum cupidatat deserunt sit incididunt.",
    "Amet exercitation occaecat reprehenderit pariatur elit ea ad magna aliquip mollit.",
    "Nulla ut minim fugiat ut ea qui proident non cillum.",
    "Excepteur cillum ipsum do amet incididunt voluptate voluptate.",
    "Tempor tempor ad duis in ipsum commodo minim.",
    "Velit sunt in amet ut velit pariatur dolor ipsum ipsum ullamco non.",
    "Sint cillum commodo consectetur exercitation cupidatat.",
    "Cupidatat consectetur voluptate occaecat commodo cupidatat.",
    "Ullamco quis non pariatur nostrud pariatur dolor ut voluptate ullamco.",
    "Consectetur eiusmod amet ad consectetur sit deserunt nostrud occaecat laboris.",
    "Aute laboris laborum esse tempor commodo anim exercitation.",
    "Labore adipisicing eiusmod voluptate voluptate sit sint cillum culpa officia aute.",
    "Incididunt exercitation ad aliqua consequat elit incididunt dolor anim consequat reprehenderit.",
    "Ea nisi ipsum do Lorem laborum pariatur Lorem duis consequat magna id exercitation ut quis.",
    "Fugiat excepteur cillum ad ut cillum ea id.",
    "Culpa exercitation cillum ut ea laboris.",
    "Nulla ut pariatur adipisicing ut quis qui irure.",
    "Magna qui dolore est reprehenderit cupidatat eu labore officia eu labore voluptate.",
    "Cillum cillum eiusmod proident laboris irure excepteur commodo id magna aliquip ea.",
    "Sint ex nulla ullamco dolor qui consectetur consequat ut elit aute ex.",
    "Do veniam laboris ex amet.",
    "Deserunt ex mollit ut cupidatat quis magna.",
    "Incididunt nostrud magna culpa adipisicing cillum aliquip eu excepteur qui aute.",
    "In anim ut nostrud ullamco ea qui ipsum eu tempor deserunt dolor est.",
    "Sit aliqua sit tempor ut sint exercitation labore aliquip tempor labore occaecat dolor non pariatur.",
    "Veniam magna laborum in commodo culpa laboris laboris amet ullamco do sint incididunt amet quis.",
    "Commodo fugiat magna mollit aliqua ea.",
    "Lorem occaecat duis adipisicing eiusmod nisi laboris exercitation.",
    "Id aliquip voluptate aliquip Lorem qui.",
    "Sunt reprehenderit adipisicing sint deserunt veniam labore voluptate quis sint consequat ipsum ullamco sunt ex.",
    "Incididunt reprehenderit officia enim eu ex cupidatat nulla nostrud deserunt ipsum nostrud anim.",
    "Sint est ex id in cupidatat.",
    "Minim non aliqua ipsum eiusmod dolore velit laborum et adipisicing.",
    "In adipisicing pariatur esse irure elit ea aute veniam ad minim aliqua Lorem velit.",
    "Reprehenderit tempor aute irure Lorem voluptate nostrud aute irure Lorem quis mollit laboris tempor ex.",
    "Sit laborum occaecat nostrud aute consequat quis voluptate cupidatat cupidatat nisi culpa reprehenderit incididunt ea.",
    "Laboris laboris proident in laborum irure ullamco reprehenderit ut laboris minim anim.",
    "Lorem duis eu Lorem velit sint in enim consequat sint dolore eiusmod reprehenderit aliquip pariatur.",
    "Laborum non sunt do non nisi magna deserunt eu veniam excepteur nulla est.",
    "Eu sunt quis tempor exercitation esse esse.",
    "Nisi tempor ullamco ex ad.",
    "Sint cillum aute cillum exercitation.",
    "Cupidatat voluptate ex occaecat ullamco cillum.",
    "Ipsum labore exercitation tempor aliquip aliquip irure mollit esse in.",
    "Irure voluptate mollit laborum aliqua duis.",
    "Quis sint sunt voluptate pariatur fugiat.",
    "Qui exercitation fugiat ea eiusmod.",
    "Sint consectetur mollit pariatur tempor magna ex ex commodo dolore.",
    "Qui elit consectetur dolor voluptate ut commodo adipisicing occaecat enim officia ea.",
    "Pariatur sunt consectetur tempor excepteur commodo mollit in mollit ad.",
    "Ea laborum duis tempor esse est sit.",
    "Veniam irure labore quis anim deserunt exercitation.",
    "Nisi minim esse mollit est occaecat eu fugiat fugiat consectetur.",
    "Et aute deserunt tempor magna nostrud velit.",
    "Non fugiat ullamco id dolore voluptate nisi voluptate ut velit labore dolore est.",
    "Non nulla eiusmod officia Lorem.",
    "Eiusmod ut mollit sint ea reprehenderit velit minim incididunt mollit ullamco consectetur.",
    "Duis amet nisi amet elit exercitation adipisicing ipsum.",
    "Magna sint mollit labore sint.",
    "Officia voluptate enim eiusmod magna duis exercitation magna ut labore et pariatur eiusmod quis.",
    "Ad do minim laborum ullamco enim proident cupidatat irure sit.",
    "Voluptate do ut sint incididunt aliqua veniam nisi consectetur ullamco non adipisicing ex.",
    "Fugiat cupidatat qui pariatur sint exercitation in incididunt laborum veniam.",
    "Labore nostrud aliqua consectetur ex dolore sunt qui laborum ullamco.",
    "Nulla aliqua ea pariatur eu cupidatat excepteur esse officia.",
    "Non anim sunt enim laboris enim pariatur est cupidatat ea excepteur nisi labore officia incididunt.",
    "Et elit veniam consequat occaecat exercitation excepteur ipsum ipsum officia.",
    "Commodo ea ut est cupidatat Lorem id sint consectetur irure fugiat mollit.",
    "Non fugiat reprehenderit irure fugiat ex ea cillum nostrud veniam sit eiusmod laborum irure.",
    "Occaecat laboris deserunt exercitation labore eu ipsum.",
  ],
  name: [
    "Mayra",
    "Bass",
    "Corrine",
    "Janell",
    "Katy",
    "Jenny",
    "Cardenas",
    "Lillie",
    "Todd",
    "Stevenson",
    "Ellison",
    "Wong",
    "Mabel",
    "Mcknight",
    "Rivers",
    "Ashlee",
    "Holt",
    "Maria",
    "Mendez",
    "Hinton",
    "Ilene",
    "Minerva",
    "Nelson",
    "Shepherd",
    "Lula",
    "Kellie",
    "Oconnor",
    "Rosanna",
    "Hayes",
    "Darla",
    "Jacobson",
    "Ella",
    "Dollie",
    "Elvia",
    "Calil",
    "Tulio",
    "Vaughn",
    "Thompson",
    "Rosa",
    "Betsy",
    "Oneil",
    "Priscilla",
    "Kitty",
    "Good",
    "Lela",
    "Jackie",
  ],
};

export function getRandomName() {
  return typesMock.name[Math.floor(Math.random() * typesMock.name.length)];
}

export function getRandomNumber() {
  return Math.floor(Math.random() * 1000);
}

export function getRandomImage() {
  return `https://i.pravatar.cc/150?u=${Math.floor(Math.random() * 1000)}`;
}

export function getRandomString() {
  return typesMock.string[Math.floor(Math.random() * typesMock.string.length)];
}
