import unittest
from src.restaurant import Restaurant 

class TestRestaurant(unittest.TestCase):
    
    def test_restaurant_has_address(self):
        # Create a restaurant with a valid address
        restaurant_with_address = Restaurant("Pizza Place", "123 Main St")
        self.assertTrue(restaurant_with_address.has_address(), "Restaurant should have an address.")

        # Create a restaurant without an address
        restaurant_without_address = Restaurant("Burger Joint", "")
        self.assertFalse(restaurant_without_address.has_address(), "Restaurant should not have an address.")

if __name__ == '__main__':
    unittest.main()
