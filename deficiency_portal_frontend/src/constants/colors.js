export const PENDING = '#DC3545';
export const COMPLETE = '#28A475';
export const pendingOrComplete = (status) => status === "Completed" ? {color: COMPLETE, fontWeight: 600} : {color: PENDING, fontWeight: 600};