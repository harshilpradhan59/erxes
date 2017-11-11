import { Customers, Companies } from '../../../db/models';
import { moduleRequireLogin } from '../../permissions';
import { CustomerMonthActivityLogBuilder, CompanyMonthActivityLogBuilder } from '../../utils';

const activityLogQueries = {
  /**
   * Get activity log for customer
   * @param {Object} root
   * @param {Object} object2 - Graphql input data
   * @param {string} object._id - Customer id
   * @return {Promise} found customer
   */
  async activityLogsCustomer(root, { _id }) {
    const customer = await Customers.findOne({ _id });

    const m = new CustomerMonthActivityLogBuilder(customer);
    return m.build();
  },

  /**
   * Get activity log for company
   * @param {Object} root
   * @param {Object} object2 - Graphql input data
   * @param {string} object._id - Company id
   * @return {Promise} Promise resolving array of ActivityLogForMonth
   */
  async activityLogsCompany(root, { _id }) {
    const company = await Companies.findOne({ _id });

    const m = new CompanyMonthActivityLogBuilder(company);
    return m.build();
  },
};

moduleRequireLogin(activityLogQueries);

export default activityLogQueries;
