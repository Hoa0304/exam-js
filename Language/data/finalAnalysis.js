function journalEvents(journal) {
    let events = [];
    for (let entry of journal) {
    for (let event of entry.events) {
    if (!events.includes(event)) {
    events.push(event);
    }
    }
    }
    return events;
    

    
}
console.log(journalEvents(JOURNAL));
// → ["carrot", "exercise", "weekend", "bread", ...]


for (let event of journalEvents(JOURNAL)) {
    console.log(event + ":", phi(tableFor(event, JOURNAL)));
    }


    for (let event of journalEvents(JOURNAL)) {
        let correlation = phi(tableFor(event, JOURNAL));
        if (correlation > 0.1 || correlation < -0.1) {
        console.log(event + ":", correlation);
        }
        }
