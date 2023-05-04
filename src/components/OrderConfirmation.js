import React from 'react';
import './OrderConfirmation.css';
class OrderConfirmation extends React.Component {
  render() {
    return (
      <div>
        <h2>Thank you for your order!</h2>
        <p>Your order has been confirmed and will be delivered shortly. Your order confirmation number is: <strong>{this.props.orderNumber}</strong></p>
        <p>A confirmation email has been sent to your email address. If you have any questions about your order, please contact our customer support team.</p>
      </div>
    );
  }
}

export default OrderConfirmation;
