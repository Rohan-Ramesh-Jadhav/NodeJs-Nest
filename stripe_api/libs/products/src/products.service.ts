import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';

@Injectable()
export class ProductsService {
  private stripe: Stripe;
  returnData: any;
  constructor() {
    this.stripe = new Stripe(process.env.STRIPE, {
      apiVersion: '2022-08-01',
    });
  }

  async fetchPriceId(): Promise<any> {}

  async createPaymentLink(price_arr): Promise<string> {
    const payment_link_data = await this.stripe.paymentLinks.create({
      line_items: price_arr,
      billing_address_collection: 'required',
      phone_number_collection: {
        enabled: true,
      },
    });
    return payment_link_data.url;

    // const price_count = Object.keys(price_id).length;
    // fetch the payment links
    // await this.stripe.paymentLinks
    //   .list({
    //     active: true,
    //   })
    //   .then((res) => {
    //     // map payment links to get each payment link ids
    //     res.data.map((payment_link_data) => {
    //       this.stripe.paymentLinks
    //         .listLineItems(payment_link_data.id.toString())
    //         .then((res) => {
    //           const price_list_arr = [];
    //           if (res.data.length == price_count) {
    //             res.data.map((price_list) => {
    //               price_list_arr.push(price_list.price.id);
    //             });
    //             Object.values(price_id).map((each_price) => {
    //               console.log(each_price);
    //               console.log(price_list_arr.includes(each_price));
    //             });
    //           }
    //         });
    //     });
    //     this.returnData = res.data;
    //   });
    // return this.returnData;
  }
}
