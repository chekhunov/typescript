enum Membership {
    Simple,
    Standart,
    Premium,
}

const membership = Membership.Standart
console.log(membership)
const membershipReverse = Membership[2] //Premium

enum SocialMedia {
    VK = 'VK',
    FACEBOOK = 'FACEBOOK',
}

const social = SocialMedia.FACEBOOK
console.log(social) // result string FACEBOOK
