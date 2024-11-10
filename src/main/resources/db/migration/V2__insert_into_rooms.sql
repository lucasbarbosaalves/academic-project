use hotel_management;

-- Insert initial rooms data
INSERT INTO `rooms` (room_type, room_price, room_description, room_photo_url)
VALUES
    ('STANDARD', 199.99, 'Comfortable standard room with queen bed, private bathroom, and city view',
     'https://pi-project-hotel-images.s3.amazonaws.com/quarto-abilio.jpeg'),

    ('DELUXE', 299.99, 'Spacious deluxe room with king bed, luxury bathroom, and garden view',
     'https://pi-project-hotel-images.s3.amazonaws.com/hotel-image-luxo.jpeg'),

    ('SUITE', 499.99, 'Luxurious suite with separate living area, king bed, jacuzzi, and ocean view',
     'https://pi-project-hotel-images.s3.amazonaws.com/quarto-luxo-plus.jpeg'),

    ('FAMILY', 399.99, 'Family room with two queen beds, large bathroom, and park view',
     'https://pi-project-hotel-images.s3.amazonaws.com/quarto de luxo.jpeg'),

    ('EXECUTIVE', 599.99, 'Executive suite with office space, king bed, premium amenities, and panoramic view',
     'https://pi-project-hotel-images.s3.amazonaws.com/parrall.jpg');
