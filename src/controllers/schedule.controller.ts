import { contractService, scheduleService, userService } from '../services';
import logger from '../helpers/logger';
import { mailController } from './mail.controller';

// export const startSecondsJob = scheduleService.startEverySecond(() => logme());
// export const startEveryMinuteJob = scheduleService.startEveryMinute(() => payHourlySalaries());
// export const startHourlyJob = scheduleService.startHourly(() => payHourlySalaries());
// export const startDailyJob = scheduleService.startDaily(() => payDailySalaries());
// export const startWeeklyJob = scheduleService.startWeekly(() => payWeeklySalaries());
// export const startMonthlyJob = scheduleService.startMonthly(() => payMonthlySalaries());
// export const startYearlyJob = scheduleService.startYearly(() => payYearlySalaries());

// Helper function to pay salaries based on time interval
async function paySalaries(intervalInHours: number, timeUnit: string) {
  const hoursInInterval = intervalInHours;

  // Find contracts where hourly_interval matches the specified time unit
  const earners = await contractService.find({
    hourly_interval: hoursInInterval,
  });

  if (!earners) return;

  // Check if there are earners
  if (earners.length === 0) {
    logger.info(`No ${timeUnit} earners found.`);
    return;
  }

  // Iterate through the earners
  for (const contract of earners) {
    // Get the amount to be paid and the user id from the contract
    const { amount_to_earn, user } = contract;

    // Update the user's account_balance field to add their salary
    const updatedUser = await userService.update(
      { _id: user },
      { $inc: { account_balance: amount_to_earn } },
    );

    if (!updatedUser) {
      logger.error('User account failed to update');
      return;
    }

    await mailController.sendPaymentConfirmationMail(
      updatedUser.email,
      updatedUser.firstname,
      updatedUser.lastname,
      amount_to_earn,
    );

    // Log that the user has been paid
    logger.info(`Paid ${amount_to_earn} to ${updatedUser.firstname} ${updatedUser.lastname}`);
  }
}

class Controller {
  startEverySecond() {
    const startEverySecond = scheduleService.startEverySecond(async () => {
      // await paySalaries(1, 'hour');
    });
  }

  startEveryMinute() {
    const startEveryMinuteJob = scheduleService.startEveryMinute(async () => {
      // await paySalaries(1, 'hourly');
    });
  }

  startHourlyJobs() {
    const startHourlyJob = scheduleService.startHourly(async () => {
      await paySalaries(1, 'hourly');
    });
  }

  startDailyJobs() {
    const startDailyJob = scheduleService.startDaily(async () => {
      await paySalaries(24, 'daily');
    });
  }

  startWeeklyJobs() {
    const startWeeklyJob = scheduleService.startWeekly(async () => {
      await paySalaries(168, 'weekly');
    });
  }

  startMonthlyJobs() {
    const startMonthlyJob = scheduleService.startMonthly(async () => {
      await paySalaries(720, 'monthly');
    });
  }

  startYearlyJobs() {
    const startYearlyJob = scheduleService.startYearly(async () => {
      await paySalaries(8760, 'yearly');
    });
  }
}

export const scheduleController = new Controller();
