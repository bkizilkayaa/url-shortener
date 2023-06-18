package com.burak.urlshortener.service;

import com.burak.urlshortener.model.Url;
import com.burak.urlshortener.repository.UrlRepository;
import com.burak.urlshortener.request.UrlCreateRequest;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@ExtendWith(MockitoExtension.class)
public class UrlServiceTest {
    @Mock
    private UrlRepository urlRepository;
    private UrlService cut;

    @BeforeEach
    public void setup(){
        cut=new UrlService(urlRepository);
    }


    @Test
    @DisplayName("Should get all urls from DB")
    void should_get_all_urls_from_db(){
        cut.getAllUrl();
        Mockito.verify(urlRepository).findAll();
    }
    @Test
    @DisplayName("Should create short url with given original url")
    void should_create_shorturl_with_originalurl(){
        UrlCreateRequest urlCreateRequest=new UrlCreateRequest(); //request dto created
        urlCreateRequest.setOriginalUrl("abc.com"); //im setting the value here

        cut.shortUrlGenerate(urlCreateRequest); // short url created and then captured down below

        ArgumentCaptor<Url> urlArgumentCaptor=
                ArgumentCaptor.forClass(Url.class); //capture Url class

          Mockito.verify(urlRepository)
                .save(urlArgumentCaptor.capture()); //capture saved Url

          Url capturedUrl= urlArgumentCaptor.getValue(); //get instance of saved Url

         assertThat(capturedUrl.getOriginalUrl()) //my captured Urls original link is equal to dto objects link?
                 .isEqualTo(urlCreateRequest.getOriginalUrl()); //if yes, test passed and object
                                                                //created successfully
    }


}
