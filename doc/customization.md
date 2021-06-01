# Customization

##logo

<!-- brand logo -->
<div classname="brand-logo">
    <link to={`${process.env.public_url}/`}> <img src={`/assets/images/icon/logo.png`} class="img-fluid" alt="" /></link>
</div>
<!-- footer logo -->
<div classname="footer-logo">
    <img src={`/assets/images/icon/logo.png`} alt="" />
</div>

## Menu

Vertical & Horizontal menu

<!-- vertical menu -->
<ul id="sub-menu" classname="sm pixelstrap sm-vertical ">
...
</ul>
<!-- horizontal menu -->
 <ul id="main-menu" classname="sm pixelstrap sm-horizontal">
..
</ul>

## Dropdown and Mega menu


<!-- dropdown menu -->
<li><a href="#">pages</a>
    <ul>
        ..
    </ul>
</li>
<!-- mega menu -->
<li classname="mega"><a href="#">home</a>
    <ul classname="mega-menu">
        <li>
            ..
        </li>
    </ul>
</li>

## Button

Multikart theme include 2 types of buttons

<a href="#" classname="btn btn-solid">shop now</a>
<a href="#" classname="btn btn-outline">shop now</a>
Title
<!-- title 1 -->
<div classname="title1">
    <h4>recent story</h4>
    <h2 classname="title-inner1">trending products</h2>
</div>

<!-- title 2 -->
<div classname="title2">
    <h4>recent story</h4>
    <h2 classname="title-inner2">trending products</h2>
</div>

<!-- title 3 -->
<div classname="title3">
    <h4>recent story</h4>
    <h2 classname="title-inner3">trending products</h2>
    <div classname="line"></div>
</div>

<!-- title 4 -->
<div classname="title4">
    <h2 classname="title-inner4">trending products</h2>
    <div classname="line">
        <span>
        </span>
    </div>
</div>


## Footer Copyright

<div classname="footer-end">
    <p><i classname="fa fa-copyright" aria-hidden="true"></i> {{today | date:'y'}} theme forest powered by pixelstrap</p>
</div>


## How to Get Product

Located in /src/api/shop.js file.

import _products from './data.json'

const timeout = 100

export default {
getproducts: (cb, timeout) => settimeout(() => cb(_products), timeout || timeout),
    buyproducts: (payload, cb, timeout) => settimeout(() => cb(), timeout || timeout)
}
<!-- sample json data -->

                        [{
                        "id": 1,
                        "name": "flare dress",
                        "price": 100,
                        "saleprice": 200,
                        "discount": 50,
                        "pictures": ["assets/images/fashion/product/1.jpg", "assets/images/fashion/product/21.jpg", "assets/images/fashion/product/36.jpg", "assets/images/fashion/product/12.jpg"],
                        "shortdetails": "sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
                        "description": "lorem ipsum is simply dummy text of the printing and typesetting industry. ",
                        "stock": 5,
                        "new": true,
                        "sale": true,
                        "category": "women",
                        "colors": ["yellow", "gray", "green"],
                        "size": ["m", "l", "xl"],
                        "tags": ["nike", "caprese", "lifestyle"],
                        "variants": [
                        {
                            "color": "yellow",
                            "images": "assets/images/fashion/product/1.jpg"
                        },
                        {
                            "color": "gray",
                            "images": "assets/images/fashion/product/21.jpg"
                        },
                        {
                            "color": "green",
                            "images": "assets/images/fashion/product/36.jpg"
                        }]
                    }]
                

## Product Hover swipe image

if you do want second image in product, Add Back div in product-list-item.jsx file

<!-- front image -->
<div class="front">
    <a href="#"><img src="assets/images/pro3/1.jpg" class="img-fluid" alt=""></a>
</div>
<!-- hover back image -->
<div class="back">
    <a href="#"><img src="assets/images/pro3/2.jpg" class="img-fluid" alt=""></a>
</div>

## Remove Product Thumbanail image

if you do no want thumbanail image in product, Remove Code product-list-item.jsx file

    {product.variants.map((vari, i) =>
        <li classname={`grid_thumb_img ${(vari.images === this.state.image)?'active':''}`} key={i}>
            <a href="javascript:void(0)" title="add to wishlist">
                <img src={`${vari.images}`} onclick={() => this.onclickhandle(vari.images)} />
            </a>
        </li>)
    }
</ul>

## Change Intagram Access Token

Located in /src/components/layouts/fashion/instagram.jsx file.

componentwillmount() {
    const instagram = ig({
        accesstoken: 'your_access_token',
    });

    const users = instagram.media();
    users.then(res => this.setstate({instadata:res.data}));

}

## Change Stripe Key

Located in /src/components/checkout/index.jsx file.

stripeclick = () => {
 var handler = (window).stripecheckout.configure({
 key: 'pk_test_glxk17khp7pokiawsasgktsl',
 locale: 'auto',
 token: (token: any) => {
 console.log(token)
 this.props.history.push({
 pathname: '/order-success',
 state: { payment: token, items: this.props.cartitems, ordertotal: this.props.total, symbol: this.props.symbol }
 })
 }
 });
 handler.open({
 name: 'multikart',
 description: 'online fashion store',
 amount: this.amount * 100
 })
 }

## Change Paypal Key

Located in /src/components/checkout/index.jsx file.

const client = {
 sandbox: 'paypal_sandbox_key',
 production: 'paypal_production_key',
 }

## How to remove color scheme

if you do no want color scheme, Remove color script in /src/components/common/headers/footer-one.jsx file.

##  How to remove RTL

if you do no want RTL for live preview, Remove code in /src/components/common/headers/footer-one.jsx file.

Home slider, Contain Banner & Parallax Text Alignment
Add class in Parent child

position left : "p-left"
position right : "p-right"
position center : "p-center"
Parallax image
If you want parallax image, Add class in Parent child

class : "parallax"

## No color Variant swatches

If you do not want color swatches, add class "no-color-varient" in parent child



