exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('pins').insert([
        {
          id: 1,
          name:'Chanel bag',
          description:'Chanel caviar bag',
          url:'https://www.fashionphile.com/includes/images/BW290675/chanel-caviar-quilted-mini-rectangular-flap-black-00.jpg'
         
          },

          {
            id: 2,
            name:'Dior bag',
            description:"Diorama bag",
            url:'https://wwws.dior.com/couture/ecommerce/media/catalog/product/cache/1/menu_bas/440x390/17f82f742ffe127f42dca9de82fb58b1/M/0/1508762458_M0422CEWN_M900_E01_G.jpg'
           
            },
  
        {
          id: 3,
          name:'Long skirt',
          description:'Long grey skirt',
          url:'http://modestfashionnetwork.com/wp-content/uploads/2018/03/skirt-high-waist-maxi-long-skirt-1_grande-1.jpg'

          },

         {
          id: 4,
          name:'Purple dress',
          description:'H&M lace dress',
          url: 'https://lp2.hm.com/hmgoepprod?set=source[/5c/e5/5ce5ca8685990eda77a38db89c01dd182422d317.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[s],hmver[1]&call=url[file:/product/main]'

         },

         {
          id: 5,
          name:'Leather jacket',
          description:'Zara black leather jacket',
          url: 'https://static.zara.net/photos///2018/I/0/1/p/2969/248/800/2/w/1920/2969248800_1_1_1.jpg?ts=1534516005517'
        },

        {
          id: 6,
          name:'Louboutin shoes',
          description:'Sparkling shoes',
          url:'https://item2.tradesy.com/images/christian-louboutin-glitter-so-kate-pumps-size-eu-37-approx-us-7-regular-m-b-23805091-0-0.jpg?width=400&height=650'

          },

          { 
            id: 7,
          name:'Celine sunglasses',
          description:'Black sunglasses',
          url:'https://images-na.ssl-images-amazon.com/images/I/41rS-VgEzmL._UX395_.jpg',
          },

          {
          id: 8,
          name:'Derby hat',
          description:'Fancy big hat',
          url:'https://images-na.ssl-images-amazon.com/images/I/51TRpqXn8sL._US500_.jpg'
        },

        {
          id: 9,
          name:'Fancy watch',
          description:'Gold Rolex with diamonds',
          url:'https://www.avianneandco.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/2/22185-1_1_1.jpg'
          },

          {
            id: 10,
            name:'Jeans',
            description:'Pearls on jeans',
            url:'https://img.ltwebstatic.com/origin/images2_pi/2018/07/27/15326762921544129202_im_900x1199.jpg'
            }
      ])
    })

}