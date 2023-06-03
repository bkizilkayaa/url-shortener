package com.burak.urlshortener.controller;

import com.burak.urlshortener.model.Url;
import com.burak.urlshortener.request.UrlCreateRequest;
import com.burak.urlshortener.response.UrlCreateResponse;
import com.burak.urlshortener.service.UrlService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import static org.springframework.http.HttpStatus.*;

@RestController
@RequestMapping("api/v1/url")
public class UrlController {
    private final UrlService urlService;
    public UrlController(UrlService urlService) {
        this.urlService = urlService;
    }

    @GetMapping
    public ResponseEntity<List<UrlCreateResponse>> getAllUrls(){
        return new ResponseEntity<>(urlService.getAllUrl(), OK);
    }

    @PostMapping()
    public ResponseEntity<UrlCreateResponse> generateShortLink(@RequestBody UrlCreateRequest urlCreateRequest){
        return new ResponseEntity<>(urlService.shortUrlGenerate(urlCreateRequest),CREATED);
    }

    @GetMapping("/{shortLink}")
    public RedirectView redirectToOriginalUrl(@PathVariable String shortLink){
        Url url= urlService.getUrlByShortLink(shortLink);
        return new RedirectView("https://"+url.getOriginalUrl());
    }

    @DeleteMapping("/{shortlink}")
    public void deleteUrl(@PathVariable String shortlink){
        urlService.deleteUrl(shortlink);
    }
}
