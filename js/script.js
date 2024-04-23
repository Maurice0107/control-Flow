// Constants
const PI = 3.1415;
const radius = 5; // in meters
const minSpacePerPlant = 0.8; // in square meters

// Function to calculate the area of the garden
function calculateGardenArea() {
    return PI * radius * radius;
}

// Function to calculate the maximum number of plants the garden can support
function calculateMaxPlants() {
    return Math.floor(calculateGardenArea() / minSpacePerPlant);
}

// Function to calculate the plant count after a specific number of weeks
function calculatePlantCount(weeks) {
    return 20 * Math.pow(2, weeks - 1); // Plants double in number every week
}

// Function to advise on plant handling based on plant count
function advisePlantHandling(weeks) {
    const maxPlants = calculateMaxPlants();
    const plantCount = calculatePlantCount(weeks);
    const capacityThreshold = 0.8 * maxPlants;
    const halfCapacity = 0.5 * maxPlants;

    if (plantCount > capacityThreshold) {
        return "Prune"; // Prune if plant count exceeds 80% of the maximum capacity
    } else if (plantCount >= halfCapacity) {
        return "Monitor"; // Monitor if plant count is between 50% and 80% of the maximum capacity
    } else {
        return "Plant"; // Plant if there is room to plant more plants
    }
}

// Function to print advice for a specific number of weeks
function printAdvice(weeks) {
    const action = advisePlantHandling(weeks);
    console.log(`After ${weeks} weeks:`);
    console.log(`Advice: ${action}`);
    console.log("");
}

// Results for 1, 2, and 3 weeks of growth
printAdvice(1);
printAdvice(2);
printAdvice(3);

// Function to calculate the total space required by a given number of plants after a specific number of weeks
function calculateTotalSpaceRequired(plants, weeks) {
    const minSpacePerPlant = 0.8; // in square meters
    return plants * minSpacePerPlant * Math.pow(2, weeks - 1); // Plants double in number every week
}

// Calculate total space required for 100 plants after 10 weeks
const totalSpaceRequired = calculateTotalSpaceRequired(100, 10);

// Calculate original garden area
const originalGardenArea = PI * Math.pow(radius, 2);

// Calculate additional space required
const additionalSpaceRequired = totalSpaceRequired - originalGardenArea;

// Calculate radius of expanded garden
const expandedGardenArea = originalGardenArea + additionalSpaceRequired;
const expandedRadius = Math.sqrt(expandedGardenArea / PI);
