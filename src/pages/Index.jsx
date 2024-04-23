// Complete the Index page component here
// Use chakra-ui
import React from 'react';
import { Box, Flex, Heading, Text, Button, Grid, GridItem, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { FaGift, FaCalendarAlt } from "react-icons/fa";

const holidays = [
  { name: "New Year’s Day", date: "January 1" },
  { name: "Inauguration Day", date: "January 20" },
  { name: "Martin Luther King Jr. Day", date: "Third Monday of January" },
  { name: "Groundhog Day", date: "February 2" },
  { name: "Super Bowl Sunday", date: "First Sunday in February" },
  { name: "Valentine’s Day", date: "February 14" },
  { name: "President’s Day", date: "Third Monday in February" },
  { name: "St. Patrick’s Day", date: "March 17" },
  { name: "April Fool’s Day", date: "April 1" },
  { name: "Easter", date: "Varies, typically in April" },
  { name: "Earth Day", date: "April 22" },
  { name: "Administrative Professionals’ Day", date: "Last full week of April" },
  { name: "Nurses Day", date: "May 6" },
  { name: "National Day of Prayer", date: "First Thursday of May" },
  { name: "Mother’s Day", date: "Second Sunday of May" },
  { name: "Armed Forces Day", date: "Third Saturday of May" },
  { name: "Memorial Day", date: "Last Monday of May" },
  { name: "Father’s Day", date: "Third Sunday of June" },
  { name: "Juneteenth", date: "June 19" },
  { name: "Independence Day", date: "July 4" },
  { name: "Parent’s Day", date: "Fourth Sunday of July" },
  { name: "Friendship Day", date: "First Sunday of August" },
  { name: "Labor Day", date: "First Monday of September" },
  { name: "Grandparent’s Day", date: "First Sunday after Labor Day" },
  { name: "Citizenship Day", date: "September 17" },
  { name: "National Children’s Day", date: "Second Sunday of October" },
  { name: "Columbus Day", date: "Second Monday of October" },
  { name: "Boss’s Day", date: "October 16" },
  { name: "Sweetest Day", date: "Third Saturday of October" },
  { name: "Mother-in-Law’s Day", date: "Fourth Sunday of October" },
  { name: "Halloween", date: "October 31" },
  { name: "Veterans Day", date: "November 11" },
  { name: "Thanksgiving", date: "Fourth Thursday of November" },
  { name: "Hanukkah", date: "Varies, typically in late November or December" },
  { name: "Christmas", date: "December 25" },
  { name: "Kwanzaa", date: "December 26 to January 1" },
  { name: "New Year’s Eve", date: "December 31" },
];

const Index = () => {
  return (
    <Box p={5}>
      <Heading mb={4} textAlign="center" color="brand.800" fontSize="2xl">
        Welcome to Timely Treasure Trove
      </Heading>
      <Text fontSize="lg" mb={6} textAlign="center" fontStyle="italic" color="brand.700">
        Find the perfect gifts for every special day in your life!
      </Text>
      <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }} gap={6}>
        {holidays.map((holiday, index) => (
          <GridItem key={index} w="100%" boxShadow="lg" p="4" rounded="lg" bg="white" as={React.memo}>
            <Menu>
              <MenuButton as={Button} rightIcon={<FaCalendarAlt />} colorScheme="teal">
                {holiday.name}
              </MenuButton>
              <MenuList>
                <MenuItem>Gifts</MenuItem>
                <MenuItem>Decorations</MenuItem>
                <MenuItem>Special Offers</MenuItem>
              </MenuList>
              <Flex direction="column" mt="2">
                <Text fontSize="sm" color="gray.600">
                  {holiday.date}
                </Text>
                <Button mt="2" colorScheme="orange" leftIcon={<FaGift />}>
                  Explore
                </Button>
              </Flex>
            </Menu>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Index;
