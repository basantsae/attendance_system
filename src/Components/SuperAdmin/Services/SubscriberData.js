export const initialSubscriber = [];

export const getSubscriberById = (subscribers, id) => {
    return subscribers.find(subscriber => subscriber.id === id) || null;
};

export const initialPlans = [];

export const getPlanById = (plans, id) => {
    return plans.find(plan => plan.id === id) || null;
};


