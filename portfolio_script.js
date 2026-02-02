//In The Project I Have Been Asked To Add Recommendation And Show Popup After Adding A Recommendation
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('recommendation_form');
    const container = document.getElementById('recommendation_container');
    const popup = document.getElementById('popup_message');

    const addRecommendation = (text, recommender) => {
        const newCard = document.createElement('div');
        newCard.classList.add('recommendation_card');
        newCard.innerHTML = `<p>"${text}"</p>  <cite>- ${recommender}</cite>  `;
        // Adds The New Recommendation at The Top of List
        container.prepend(newCard); 
        
        newCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const recommendationText = document.getElementById('new_recommendation').value;
        const recommenderName = document.getElementById('recommender_name').value;


        if (!recommendationText.trim() || !recommenderName.trim()) {
            return;
        }

        
        addRecommendation(recommendationText, recommenderName);
        
        
        form.reset();//reset after adding recommendation

        showPopup();
    });

    window.showPopup = () => {
        popup.style.display = 'block';
    };

    window.closePopup = () => {
        popup.style.display = 'none';
    };

    window.onclick = (event) => {
        if (event.target == popup) {
            closePopup();
        }
    };
});
